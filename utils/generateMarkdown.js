
const badgeLicense = (response) =>{
console.log(response)
  var badge;

  if (response.licence == "Apache License"){
    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (response.licence == "IBM License"){
    badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  else if (response.licence == "The MIT License"){
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (response.licence == "GNU License "){
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  return badge;
  
};





function generateMarkdown(data) {
  return `
  # ${data.Title}
  https://github.com/${data.Github}/${data.Title}

  # License
  ${badgeLicense.license}

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

  # Question
  ${data.Question}

  # Contact
  ${data.Contact}

  # Contributor
  ${data.Contributor}

`
}



module.exports = generateMarkdown;
