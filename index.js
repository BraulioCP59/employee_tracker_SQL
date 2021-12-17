const {prompt} = require('inquirer');
const Main_Menu = require('./lib/Main_Menu');
const db = require("./queries");
 
const main = async () =>{
  //
  const response = await prompt(Main_Menu);
  console.log("\n\n");

  const [method, argument] = response.mainMenuSelection.split(" ") //["view", "flavors"]
  //
  const result = await db[method](argument);
  console.table(result);
  setTimeout(main, 2000);

}
 
 
main();