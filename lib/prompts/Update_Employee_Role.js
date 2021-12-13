const Update_Employee_Role = [
    {
        type: "list", 
        name: "employee", 
        message: "Which employee's role would you like to update?",
        choices: [],//needs code for pulling list from employees table in db!!
    },
    {
        type: "list", 
        name: "newRole", 
        message: "Which role do you want to assign to the selected employee?",
        choices: [],//needs code for pulling list from roles table in db!!
    },
]

module.exports = Update_Employee_Role;