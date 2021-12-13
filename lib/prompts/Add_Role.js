const Add_Role = [
    {
        type: "input", 
        name: "roleName", 
        message: "What is the name of the role?",
    },
    {
        type: "input", 
        name: "roleSalary", 
        message: "What is the salary of the role?",
    },
    {
        type: "list", 
        name: "roleDepartment", 
        message: "Which department does the role belong to?",
        choices: [],//needs code for pulling list from department table in db!!
    },

]

module.exports = Add_Role;