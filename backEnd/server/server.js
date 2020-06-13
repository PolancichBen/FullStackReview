const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const {getReposByUsername} = require ('../../frontEnd/github/github');
const queries = require('./queries')
// const save = require('../database/index'); //ToBeAQuery


app.use(express.static(path.join(__dirname, "../../frontEnd/dist")));
app.use(express.json())

app.post('/repos',(req,res)=>{
  getReposByUsername(req.body.data,(response)=>{
    res.send(response)
  })
})


app.listen(PORT, () => {
  console.log(`Bro! Servers running Bro! Port ${PORT}`);
});