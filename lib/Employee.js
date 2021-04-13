// THIS IS THE MAIN CLASS BECAUSE ALL ENGINEERS, INTERNS, AND MANAGERS ARE A SUB CLASS OF EMPLOYEE
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
//  returns 'Employee'
    }
}

module.exports = Employee

// const bob = new Employee("Bob", 234, "bob@bob.com")
// const dave = new Employee("Dave", 1213, "Dave@bob.com")
// console.log(bob)

// bob.getName();
