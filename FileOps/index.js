const ReadUserData = require("./ReadFile");
const WriteUserData = require("./WriteFile");

function CheckRoute (req, res) {
  const url = req.url
  let body = ''
  req.on('data', async chunk => {
    body = await body + chunk.toString();
  }).on('end', () => {
    switch (url) {
      case '/register/v1':
        WriteUserData(JSON.parse(body))
        const resMsg = {
          status: 200,
          message: 'Registered successfully'
        }
        res.end(JSON.stringify(resMsg))
        break
      case '/login/v1':
        users = ReadUserData()
        const index = JSON.parse(users)?.findIndex(data => data.sEmail === JSON.parse(body).sEmail)
        let obj = {}
        if (index >= 0) {
          obj = {
            status: 200,
            message: 'Logged in successfully'
          }
        } else {
          obj = {
            status: 400,
            message: 'User not found'
          }
        }
        // res.statusCode(200)
        res.end(JSON.stringify(obj))
        break
      default:
        const data = {
          message: 'Not found',
          status: 404
        }
        res.end(JSON.stringify(data))
        break
    }
  })
}
module.exports = CheckRoute