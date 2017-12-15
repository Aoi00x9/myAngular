const express = require('express')
const router = express.Router()
const mongoClient = require('mongodb').MongoClient
const mongo_string = 'mongodb://localhost:27017/brainstorm'

router.get('/show', function (req, res) {
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection('questions')
            .find()
            .toArray()
            .then(questions => {
                const output = { result: 'ok', message: questions }
                res.json(output)
            })
        db.close()
    })
})

router.get('/show/biology', function (req, res) {
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection('questions')
            .find({subject:"biology"})
            .toArray()
            .then(questions => {
                const output = { result: 'ok', message: questions }
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
            date: req.body.date
        }
        db.collection('questions')
            .insertOne(data, (err, result) => {
                if (err) throw err
                const response = { result: 'ok', message: result.result.n + ' Inserted' }
                res.json(response)
            })
        db.close()
    })
})

router.delete('/delete/:title', function (req, res) {
    const query = { title: req.params.title }
    mongoClient.connect(mongo_string, function (err, db) {
        db.collection('questions')
            .deleteMany(query, function (err, result) {
                const response = { result: 'ok', message: result.result.n + ' Deleted' }
                res.json(response)
            })
        db.close()
    })
})

/**router.put('/update/:q_id', function (req, res) {
    mongoClient.connect(mongo_string, function (err, db) {

        const query = {
            q_id: req.params.q_id,
            answer1: req.body.answer1,
            answer2: req.body.answer2
        }
        db.collection('questions')
            .update(query, function (err, result) {
                const response = { result: 'ok', message: result.result.n + ' Updated' }
                res.json(response)
            })
        db.close()
    })
})**/

module.exports = router