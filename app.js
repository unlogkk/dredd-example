var app = require('express')()

app.get('/', function(req, res) {
  res.json({message: 'Hello World!'})
})

app.get('/test', function(req, res) {
  res.json({status: 'ok1'})
})

app.post('/test', function(req, res) {
  res.status(201).json({status: 'ok'})
})

app.listen(3000)