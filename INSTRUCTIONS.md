# Setup Instructions

To get the web service up and running, please follow the instructions bellow.

### MySql Database Setup
1. Download and install MySql. Run MySql instance at localhost.
- For more information about MySql, please visit https://dev.mysql.com/
2. Create database 'AdaSupport' with the follow statement:
```sql
CREATE DATABASE AdaSupport;
```
3. Create table 'messages' with the follow statement:
```sql
CREATE TABLE messages (
	id int NOT NULL AUTO_INCREMENT,
	conversation_id varchar(255) NOT NULL,
	sender varchar(255) NOT NULL,
	message varchar(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT PK_messages PRIMARY KEY (id, conversation_id)
);
```

### RestFul Web Service Setup
1. Download and install node.js. 
- For more information about node.js, please visit https://nodejs.org/en/
2. Run the following command to install dependencies: 
``` npm install ```
3. Run the following command to start the web service:
``` npm start ```

### Run Postman Test Collection
1. Run the following command to run tests:
``` npm test ```

Note: The test collection can also be run through the postman application. https://www.getpostman.com/