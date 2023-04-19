const fs = require('fs')
const path = require('path')

function ReadUserData () {
  const obj  = {
    status: 400,
    message: 'User not found'
  }
  if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
    const data = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    if (data === '' ) {
      return obj
    } else {
      return data
    }
  } else {
    return obj
  }
}

module.exports = ReadUserData