const express = require('express')
const router = express.Router()
const mongoClient = require('mongodb').MongoClient
const mongo_string = 'mongodb://localhost:27017/brainstorm'

router.get('/show', function (req, res) {
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection('answers')
            .find()
            .toArray()
            .then(answer => {
                const output = { result: 'ok', message: answer }
                res.json(output)
            })
        db.close()
    })
})

router.get('/show/ans/:title', function (req, res) {
    const query = { title: req.params.title }
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection('answers')
            .find({title:query})
            .toArray()
            .then(answer => {
                const output = { result: 'ok', message: answer }
                res.json(output)
            })
        db.close()
    })
})

router.post('/add', function (req, res) {
    mongoClient.connect(mongo_string, function (err, db) {

        const data = {
            username: req.body.username,
            subject: req.body.subject,
            title: req.body.title,
            date: req.body.date,
            answer: req.body.answer
        }
        db.collection('answers')
            .insertOne(data, (err, result) => {
                if (err) throw err
                const response = { result: 'ok', message: result.result.n + ' Inserted' }
                res.json(response)
            })
        db.close()
    })
})

router.delete('/delete/:answer', function (req, res) {
    const query = { title: req.params.answer }
    mongoClient.connect(mongo_string, function (err, db) {
        db.collection('questions')
            .deleteMany(query, function (err, result) {
                const response = { result: 'ok', message: result.result.n + ' Deleted' }
                res.json(response)
            })
        db.close()
    })
})

module.exports = router