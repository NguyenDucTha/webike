var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var routes = require('./routes')
var app = express()

const PORT = 4000
const corsOption = {
  origin: '*',
  optionsSuccessStatus: 200
}


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOption))

routes(app)

app.listen(PORT, function () {
  console.log('started listen port', PORT);
})