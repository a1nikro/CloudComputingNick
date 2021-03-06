//index.js
const express = require('express')
const nodemon = require('nodemon')
const cors = require('cors')

const app = express();
app.use(cors())

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});