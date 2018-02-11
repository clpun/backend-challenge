const routes = require('express').Router();
const { validateMessageInput } = require('./validation'); 

// GET /conversations/:conversation_id
routes.get('/conversations/:conversation_id', (req, res) => {
    const conversationId = req.params.conversation_id;
    const sql = `SELECT sender, message, created
                    FROM messages
                    WHERE messages.conversation_id = ${db.escape(conversationId)}`;
    
    db.query(sql, (error, result) => {
        if (error) {
            return res.status(500).send(error.sqlMessage);
        }

        res.send({
            'id': conversationId,
            'messages': result
        });
    });
});

// POST /messages
routes.post('/messages', (req, res) => {
    const validationError = validateMessageInput(req.body);
    if (validationError) {
        return res.status(400).send(validationError);
    }

    const message = {
        conversation_id: req.body.conversation_id,
        sender: req.body.sender,
        message: req.body.message
    };
    db.query(`INSERT INTO messages SET ?`, message, (error, result) => {
        if (error) {
            return res.status(500).send(error.sqlMessage);
        }

        return res.status(201).send('Message has been added successfully!');
    });
});

// All other requests redirect to 404
routes.all("*", (req, res, next) => {
    return res.status(404).send('Route not found');
    next();
});

module.exports = routes;