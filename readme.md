# nodejs starter project

### Steps

1. create project

    ```
    npm init
    ```

2. install express

    ```
    npm install express
    ```

3. install dotenv

    ```
    npm install dotenv
    ```

4. create .env file with below content

    ```
    NODE_ENV=development
    #NODE_ENV=production

    PORT=4001
    ```

5. create app folder in root
6. create config folder in app folder
7. create index.js file in config folder with below content

    ```
    const dotenv = require("dotenv");
    dotenv.config();

    module.exports = {
        port: process.env.PORT,
        environment: process.env.NODE_ENV,
    };
    ```

8. create index.js file in app folder with below content

    ```
    const express = require("express");
    const app = express();
    const { port } = require("./config/index");

    app.get('/', (req, res) => {
        res.send('Hello World !!!');
    });

    app.listen(port, () => {
        console.log(\`Server is running on port ${port}`);
    });
    ```

9. add below code in package.json file in scripts key
    
    ```
    "start": "nodemon app/index.js"
    ```
    
10. run project

    ```
    npm start
    ```