const request = require("request");
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getCatData = (catToFind)=>{
  const catURL = `https://api.thecatapi.com/v1/breeds/search?q=${catToFind}`;
  request(catURL, function (error, response, body) {
    
    if (response.statusCode !== 200) {
      console.log(`There was an error: ${error}`);
      return;
    } else if(body.length === 0){
      console.log(`Sorry no data was found`);
      return;
    }

    const data = JSON.parse(body);
    console.log(`We found this Data about the ${catToFind}:`, data[0].description); // Print the HTML for the Google homepage.
  });
  
}

rl.question('Please enter a breed of cat: ', (answer) => {
  getCatData(answer);
  rl.close();
});
