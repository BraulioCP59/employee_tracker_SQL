const Main_Menu = require('./lib/Main_Menu');
const {prompt} = require('inquirer');
const db = require('./queries');


const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your new project?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide a usage example by entering a valid JS code snippet.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type from the list below.',
        choices: ["Apache License 2.0","GNU General Public License v3.0","MIT License","BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense"],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide example how to run the code. For Example: How to run the script for mobile application.',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'How can users reach you on Github?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ];

  prompt(questions)
  .then((answers) => {
      // Use user feedback for... whatever!!
      console.log("\nSession Details: ");
      console.log(answers);
    });

// const main = async () => {
//    const response = await prompt(Main_Menu);
//    console.log(response);
//     // const [method, argument] = response.choice.split(" ") //["view", "flavors"]
//     // const result = await db[method](argument);
//     // console.table(result);
//     // setTimeout(main, 1500);
// }

// main();