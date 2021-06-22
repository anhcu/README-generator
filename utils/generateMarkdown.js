
// function licenseBadge(data){
//   console.log(data)
//   const licenseType = data.license[0];
//   let licenseString = " "
//   if (licenseType === "Apache"){
//     licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//   };
//   if (licenseType === "IBM"){
//     licenseString = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
//   };
//   if (licenseType === "MIT"){
//     licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
//   };
//   if (licenseType === "GNU"){
//     licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
//   };
//   return licenseString
  
// };





function generateMarkdown(data) {
  return `
  # ${data.Title}
  https://github.com/${data.Github}/${data.Title}

  # Email
  ${data.Email}

  # Table of Contents
  * [Title](#Title)
  * [Github](#Github)
  * [Description](#Description)
  * [Motivation](#Motivation)
  * [Install](#Install)
  * [Instructions](#Instructions)
  * [License](#License)
  * [Learn](#Learn)
  * [Contact](#Contact)
  * [Contributor](#Contributor)


  # Description
  ${data.Description}

  # Motivation
  ${data.Motivation}

  # Install
  ${data.Install}

  # Instructions
  ${data.Instructions}

  # License
  ${data.License}

  # Question
  ${data.Question}

  # Contact
  ${data.Contact}

  # Contributor
  ${data.Contributor}

`
}



module.exports = generateMarkdown;
