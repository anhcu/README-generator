
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
  * [Learn](#Learn)
  * [Contact](#Contact)
  * [License](#License)
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

  # Learn
  ${data.Learn}

  # Contact
  ${data.Contact}

  # License
  ${data.License}

  # Contributor
  ${data.Contributor}

`
}



module.exports = generateMarkdown;
