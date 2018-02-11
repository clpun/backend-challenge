exports.validateMessageInput = payload => {
    const { conversation_id, sender, message } = payload;
    let error;
    if (!conversation_id) {
        error = `'conversation_id' is required in the request payload.`;
    } else if (!sender) {
        error = `'sender' is required in the request payload.`;
    } else if (!message) {
        error = `'message' cannot be empty.`;
    } else if (sender && typeof sender !== 'string') {
        error = `Invalid input type for 'sender'.`;
    } else if (message && typeof message !== 'string') {
        error = `Invalid input type for 'message'.`;
    }

    return error;
};
