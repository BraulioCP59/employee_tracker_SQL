require('dotenv').config();
const util = require("util");
const mysql = require("mysql2");
const {prompt} = require("inquirer");
const Add_Role = require("../lib/prompts/Add_Role");
const Add_Employee = require("../lib/prompts/Add_Employee");
const Add_Department = require("../lib/prompts/Add_Department");
const Update_Employee_Role = require("../lib/prompts/Update_Employee_Role");
const { Console } = require('console');

const db = mysql.createConnection({
    host:"localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const query = util.promisify(db.query).bind(db);
console.log("THis is running", query);



const queryManager = {
    view(tableName){
        if(tableName === 'employees')
        {
            // returns formated employee data
           return query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary,employees.manager_id, departments.department_name FROM employees INNER JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id`);
        }else {
            return query(`SELECT * FROM ${tableName}`)
        }
    },
    async add(tableName){
        switch(tableName)
        {
            //
            case 'departments':
                const {department_name} = await prompt(Add_Department);
                return query(`INSERT INTO ${tableName}(department_name) VALUES ('${department_name}')`);

            //
            case 'roles':
                //loads current department data into add role prompt for selecting what department the new role belongs to
                Add_Role[2].choices = [];
                deptData = await query(`SELECT * FROM departments`);

                deptData.forEach((dept) =>{
                    
                    let choice = {name: dept.department_name,value: dept.id}
                    Add_Role[2].choices.push(choice);
                })

                const {roleName, roleSalary, roleDepartment } = await prompt(Add_Role);
                return query(`INSERT INTO ${tableName}(title, salary, department_id) VALUES ('${roleName}', ${roleSalary}, ${roleDepartment})`);
            //
            case 'employees':
                //loads current roles data into add employee prompt for selecting what role the new employee has
                Add_Employee[2].choices = [];
                roleData = await query(`SELECT * FROM roles`);

                roleData.forEach((role) =>{
                    
                    let choice = {name: role.title,value: role.id}
                    Add_Employee[2].choices.push(choice);
                })


                //loads current employees data into add employee prompt for selecting what employee with title manager the new employee has been assigned to
                Add_Employee[3].choices = [{name: 'none', value: null}];
                managerData = await query(`SELECT * FROM employees INNER JOIN roles on employees.role_id = roles.id`);// need query that gets employees with role id == role title of Manager. 
                console.log("Here i am at line 64", managerData);

                managerData.forEach((manager) =>{
                    if(manager.title === 'Manager')
                    {
                        let choice = {name: manager.first_name + " " + manager.last_name, value: manager.id}
                        Add_Employee[3].choices.push(choice);
                    }
                })
                const {employeeFirstName, employeeLastName, employeeRole, employeeManager } = await prompt(Add_Employee);
                return query(`INSERT INTO ${tableName}(first_name, last_name, role_id, manager_id) VALUES ('${employeeFirstName}', '${employeeLastName}', ${employeeRole}, ${employeeManager})`);
        }
    },
    async update(tableName){
        switch(tableName)
        {
            
            case 'departments':
                console.log("Sorry, this functionality is not yet supported!");
                break;

            
            case 'roles':
               console.log("Sorry, this functionality is not yet supported!");
               break;

            //
            case 'employees':
                //loads current employee data into update employee role prompt for selecting what employe should have their role updated
                Update_Employee_Role[0].choices = [];
                employeeData = await query(`SELECT * FROM employees`);
                
                employeeData.forEach((emp) =>{
                    
                    let choice = {name: emp.first_name + " " + emp.last_name, value: emp.id}
                    Update_Employee_Role[0].choices.push(choice);

                })

                //loads current role data into update employee role prompt prompt for selecting what employe should have their role updated
                Update_Employee_Role[1].choices = [];
                rolesData = await query(`SELECT * FROM roles`);

                rolesData.forEach((role) =>{

                    let choice = {name: role.title, value: role.id}
                    Update_Employee_Role[1].choices.push(choice);

                })

                const {employee, newRole} = await prompt(Update_Employee_Role);
                return query(`UPDATE employees SET role_id = ${newRole} WHERE id = ${employee}`);
        }
    }
}

module.exports = queryManager;
