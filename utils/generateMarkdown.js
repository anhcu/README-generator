function generateMarkdown(data) {
  console.log('this is data =')
  console.log(data.License)

      var badge;
    
      if (data.License == "Apache License"){
        badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      }
      else if (data.License == "IBM License"){
        badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      }
      else if (data.License == "The MIT License"){
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      }
      else if (data.License == "GNU License "){
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      }
      return `
      
  # ${data.Title}
  https://github.com/${data.Github}/${data.Title}

  # License
  ${badge}

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

  # Contact
  ${data.Contact}

  # Contributor
  ${data.Contributor}

`
}



module.exports = generateMarkdown;
