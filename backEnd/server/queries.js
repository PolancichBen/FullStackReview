const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hamster94!",
  database: "cows"
});

connection.connect();

const newRepoRequest = (sortedRepo,cb) => {
  console.log(sortedRepo)
  connection.query(`INSERT INTO repos(gitId, creation, handle, repo_description, repo_url, owner_starred, owner_starGazer, owner_followers_url, owner_organizations_url) VALUES ('${sortedRepo.id}','${sortedRepo.creation}','${sortedRepo.handle}','${sortedRepo.description}','${sortedRepo.url}','${sortedRepo.starred}','${sortedRepo.starGazer}','${sortedRepo.followers}','${sortedRepo.organizations}')`,(err,results)=>{
    if (err){
      console.log(err);
      cb('You got an err in queries',err)
    } else {
      console.log(results)
      cb(results)
    }
  })
}

module.exports ={
  newRepoRequest
}