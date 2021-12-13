const Add_Employee = [
    {
        type: "input", 
        name: "employeeFirstName", 
        message: "What is the employee's first name?",
    },
    {
        type: "input", 
        name: "employeeLastName", 
        message: "What is the employee's last name?",
    },
    {
        type: "list", 
        name: "employeeRole", 
        message: "What is the employee's role?",
        choices: [],//needs code for pulling list from roles table in db!!
    },
    {
        type: "list", 
        name: "employeeManager", 
        message: "Who is the employee's manager?",
        choices: [],//needs code for pulling list from employees table in db!!
    },

]

module.exports = Add_Employee;