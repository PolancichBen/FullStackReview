const Axios = require('axios');
const config = require('../../config');


let getReposByUsername = (username,callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
console.log('Searching for ',username)
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/'+username+'/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }

  Axios.get('https://api.github.com/users/'+username+'/repos')
  .then((response)=>{
    callback(response.data)
  })
  .catch((errur)=>{
    console.log('Ohhh you don did it dawg, U gon nd got yourrself a mighty fine Axios Get',errur)
    callback("Error at github.js")
  })
}
// getReposByUsername('PolancichBen');
module.exports.getReposByUsername = getReposByUsername;