const express = require('express')
const app = express()
const tab = require('./data')

const cors = require("cors");
app.use(cors({ origin: "*" }));
app.get("api/tab", (req, res) => {
  res.json(tab);
});
const port = 3002;
app.listen(port,()=>console.log('server is on port 5000'))
