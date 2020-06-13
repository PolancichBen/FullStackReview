const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const github = require('../../frontEnd/github/github.js');
const queries = require('./queries')
// import getReposByUsername from '../../frontEnd/github/github';
// const save = require('../database/index'); //ToBeAQuery


app.use(express.static(path.join(__dirname, "../../frontEnd/dist")));
app.use(express.json())

app.post('/repos', (req, res) => {
  github.getReposByUsername(req.body.data, (response) => {
    //need to add a query function here
    github.sortData(response, (err, sortedObject) => {
      if (err) {
        console.log('Error in sortdata serverline19', err);
      } else {
        queries.newRepoRequest(sortedObject, (error, queryDone) => {
          if (error) {
            console.log('error in newRepo Request', error)
          } else {
            console.log(queryDone)
          }
        });
      }
    });
    res.send(response)
  })
})


app.listen(PORT, () => {
  console.log(`Bro! Servers running Bro! Port ${PORT}`);
});