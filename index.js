const {prompt} = require('inquirer');
const Main_Menu = require('./lib/Main_Menu');
const db = require("./queries");
 
const main = async () =>{
  //
  const response = await prompt(Main_Menu);
  console.log(response);

  const [method, argument] = response.mainMenuSelection.split(" ") //["view", "flavors"]
  //
  const result = await db[method](argument);
  console.table(result);
  setTimeout(main, 20000);

}
 
 
main();