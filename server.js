const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./server/api.js'))
app.use('/api.post', require('./server/api.post.js'))
app.use('/api.question', require('./server/api.question.js'))
app.use('/api.answer', require('./server/api.answer.js'))
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'))
})



const server = app.listen(8081, function () {
    const port = server.address().port
    console.log("server is running.. at port: %s", port)
})