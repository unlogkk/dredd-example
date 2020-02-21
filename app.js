var app = require('express')()

app.get('/', function(req, res) {
  res.json({message: 'Hello World!'})
})

app.get('/test', function(req, res) {
  res.json({status: 111})
})

app.listen(3000)