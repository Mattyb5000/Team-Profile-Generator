// generate the HTML pages
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern")

const generateTeam = team => {
    const html = [];
    // team.forEach((employee) => {
    //     if (employee.getRole() === "Manager") {
    //         html += generateManager(employee);
    //     }
    //     if (employee.getRole() === "Engineer") {
    //         html += generateEngineer(employee);
    //     }
    //     if (employee.getRole() === "Intern") {
    //         html += generateIntern(employee);
    //     }
    // })
    // A method for a template to render manager info
    const generateManager = manager => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h6 class="card-title">${manager.getRole()}</h6>
          <p class="card-text">${manager.id}</p>
          <p class="card-text"><a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="card-text">${manager.getOfficeNumber()}</p>
        </div>
      </div>`
    }
    // A method for a template to render engineer info
    const generateEngineer = engineer => {
        //put HTML template here
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <h6 class="card-title">${engineer.getRole()}</h6>
          <p class="card-text">${engineer.id}</p>
          <p class="card-text"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="card-text"><a href="https://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a></p>
        </div>
      </div>`
    }
    // A method for a template to render intern info
    const generateIntern = intern => {
        //put HTML template here
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h6 class="card-title">${intern.getRole()}<</h6>
          <p class="card-text">${intern.id}</p>
          <p class="card-text"><a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="card-text">${intern.getSchool()}</p>
        </div>
      </div>`
    }

    // const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)) //this needs to call a function for the intern employee type (function like the one on line 8)
    );
   html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)) // this needs to call a function for the engineer employee type
    );
    return html.join("");
}

// We are exporting out an anonymous function
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}