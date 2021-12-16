require('dotenv').config();
const util = require("util");
const mysql = require("mysql2");
const {prompt} = require("inquirer");
const Add_Role = require("../lib/prompts/Add_Role");
const Add_Employee = require("../lib/prompts/Add_Employee");
const Add_Department = require("../lib/prompts/Add_Department");

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
        console.log(tableName)
        return query(`SELECT * FROM ${tableName}`)
    },
    async add(tableName){
        switch(tableName)
        {
            case 'addDeptPlaceholder':
                const {name} = await prompt(Add_Department);
                    return query(`INSERT INTO ${tableName}(name) VALUES ('${name}')`);

            case 'addRolePlaceholder':
                const {roleName, roleSalary, roleDepartment } = await prompt(Add_Role);
                    return query(`INSERT INTO ${tableName}(title, department, salary) VALUES ('${roleName}', ${roleSalary}, ${roleDepartment})`);

            case 'addEmpPlaceholder':
                const {employeeFirstName, employeeLastName, employeeRole, employeeManager } = await prompt(Add_Employee);
                    return query(`INSERT INTO ${tableName}(first_name, last_name, title, manager) VALUES ('${employeeFirstName}', ${employeeLastName}, ${employeeRole}, ${employeeManager})`);
        }
    },
    async delete(tableName){
        const data = await query(`SELECT * FROM ${tableName}`);
        console.log(data);
        const {selection} = await prompt({
            message: `Which ${tableName.slice(0,-1)} would you like to remove?`,
            type: "list",
            choices: data.map(item => ({name: item[tableName.slice(0,-1)], value: item.id})),
            name: 'selection'
        });

        return query(`DELETE FROM ${tableName} WHERE id = ${selection}`)
    }
}

module.exports = queryManager;
