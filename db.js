const mysql = require('mysql');

exports.connectToDB = () => {
    const dbName = 'AdaSupport';
    global.db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : dbName
    });

    db.connect(error => {
        if (error) {
            throw error;
        }

        console.log(`Connected to database ${dbName}...`);
    });
};
