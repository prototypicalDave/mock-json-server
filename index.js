var express = require('express')

var app = express()

app.get('/user', function (req, res) {
  res.json({user: "User List here"})
})

app.listen(3000)