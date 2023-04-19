const fs = require('fs')
const path = require('path')

function WriteUserData (data) {
  let usersData = []
  if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
    let arr = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    if (arr === '') {
      usersData.push(data)
    } else {
      usersData = [...JSON.parse(arr)]
      usersData.push(data)
    }
    fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
  } else {
    const usersData = []
    usersData.push(data)
    fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
  }
}

module.exports = WriteUserData