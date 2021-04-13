// Extend from Employee
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super()
    }
}

//getRoll() method overridden to return 'Manager'