const express = require("express");
const app = express();
const { port } = require("./config/index");

app.get('/', (req, res) => {
    res.send('Hello World !!!');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });