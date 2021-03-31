const path = require('path')
const express = require('express')
const layout = require('express-layout')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded({extended: false})
]
app.use(middlewares)

app.use('/', routes)

app.listen(3000, () => {
  console.log('The Name Game is now available at http://localhost:3000')
})