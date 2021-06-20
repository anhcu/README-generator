
function generateMarkdown(data) {
  return `
  # ${data.Title}

  # Link to project
  https://github.com/${data.Github}/${data.Title}

  # Description
  ${data.Description}

  # Motivation
  ${data.Motivation}

  # Install
  ${data.Install}

  # Instructions
  ${data.Instructions}

  # Learn
  ${data.Learn}

  # Contact
  ${data.Contact}

  # License
  ${data.License}

  # Contributor
  ${data.Contributor};
`


}



module.exports = generateMarkdown;
