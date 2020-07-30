const readline = require("readline");
const breedFetcher = require('./breedFetcher');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a breed of cat: ", (answer) => {
  
  breedFetcher(answer, (err,data)=>{
    if(err){
      console.log(err)
    } else{
      console.log(`We found this data about ${answer}: ${data}`)
    }
  })
  rl.close();
});


