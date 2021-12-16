const Main_Menu = [

    {
        type: "list",
        name: "mainMenuSelection", 
        message: "What would you like to do?",
        choices: [
        {name: "View All Employees", value: "view employees"}, 
        {name: "Add An Employee", value: "add employees"},
        {name: "Update An Employee Role", value: "update employees"},
        {name: "View All Roles", value: "view roles"},
        {name: "Add A Role", value: "add roles"},
        {name: "View All Departments", value: "view departments"},
        {name: "Add A Department", value: "add departments"},
        {name: "Exit Application", value: "exit"}
    ]  
    },

];

module.exports = Main_Menu;
