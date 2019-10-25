#!/usr/bin/env node
const {ncp} = require("ncp")
const prefix = require("global-prefix")
const inquirer = require('inquirer')

const choice = (s) => {
  switch (s) {
    case "SPA":
      return "parcel-spa"
    case "SPA with React":
      return "parcel-spa-react"
    case "Static Site Generator":
      return "parcel-static-site"
    case "Static Site Generator with React":
      return "parcel-static-site-react"
  }
}

inquirer
  .prompt([
    {
      type:"input",
      name:"name",
      message:"What is the project name?"
    },
    {
        type: 'list',
        name:"projectType",
        message:"What is the project type?",
        choices:[
            "SPA",
            "SPA with React",
            "Static Site Generator",
            "Static Site Generator with React"
        ]
    }
  ])
  .then(answers => {
    const template = choice(answers.projectType)
    ncp(
      `${prefix}/lib/node_modules/wc-parcel-generator/templates/${template}`,
      `${process.cwd()}/${answers.name}`,
      (err)=>{
        if (err) {
          console.error(err)
        } else {
          console.log("Template successfully generated")
        }
      }
    )
  })
  .catch(console.error);
