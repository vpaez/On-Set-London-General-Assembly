const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const { port, dbUri } = require('./config/environment')

const app = express()

app.use(bodyParser.json())
app.use('/api', routes)

mongoose.connect(dbUri)

app.listen(port, () => console.log(`Listening on port ${port}`))
