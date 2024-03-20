import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
const QuestionArray = [
  {
    name: "URL",
    message: "what url do u want to create",
  },
];
let URL;
inquirer
  .prompt(QuestionArray)
  .then((answers) => {
    console.log(answers);
    // URL = answers.URL;
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("asa.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// console.log(URL);
