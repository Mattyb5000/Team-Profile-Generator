// Extend from Employee
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}
module.export = Intern
// getSchool() method
// getRole() method overridden to return 'Intern'