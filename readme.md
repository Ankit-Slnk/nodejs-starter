# nodejs starter project

### Steps

1. create project

    ```
    npm init
    ```

2. install express

    npm install express

3. install dotenv

    npm install dotenv

4. create .env file with below content

    >NODE_ENV=development <br>
    >#NODE_ENV=production <br><br>
    >PORT=4001

5. create app folder in root
6. create config folder in app folder
7. create index.js file in config folder with below content

    >const dotenv = require("dotenv"); <br>
    >dotenv.config(); <br><br>
    >module.exports = { <br>
        >&emsp;&emsp;port: process.env.PORT, <br>
        >&emsp;&emsp;environment: process.env.NODE_ENV, <br>
    >};

8. create index.js file in app folder with below content

    >const express = require("express"); <br>
    >const app = express(); <br>
    >const { port } = require("./config/index"); <br><br>
    >app.get('/', (req, res) => { <br>
        >&emsp;&emsp;res.send('Hello World !!!'); <br>
    >}); <br><br>
    >app.listen(port, () => { <br>
        >&emsp;&emsp;console.log(\`Server is running on port ${port}`); <br>
    >}); <br>

9. add below code in package.json file in scripts key
    
    >"start": "nodemon app/index.js"
    
10. npm start