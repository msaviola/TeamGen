var fs = require ('fa');
const inquirer = require('inquirer');

const Intern = require("./lib/Intern");

const InternQuestion = () => {
    inquirer
      .prompt([{
        type: 'confirm',
        name: 'interns',
        message: "Do you have any interns (y/N)?"
      }])
  


  .then(function (textOutput) {
    return thenableWriteFile('./output/TeamProfile.html', htmlOutput);
})
.then(function () {
    console.log('All done!');
})
.catch(function (error) {
    console.log('Oh noes! An error!', error);
});
}
  