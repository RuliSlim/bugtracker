// require('rootpath')()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const jwt = require('./shared/jwt')
const errorHandler = require('./shared/error.handler')

const userApi = require('./users/user.controller')
const ticketApi = require('./tickets/ticket.controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
//TODO: Temporary for accessing server
// app.use(jwt())

// api routes
app.use('/users', userApi)
app.use('/tickets', ticketApi)

app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port)
})
