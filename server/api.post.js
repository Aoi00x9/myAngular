const express = require('express')
const router = express.Router()
const mongoClient = require('mongodb').MongoClient
const mongo_string = 'mongodb://localhost:27017/brainstorm'

router.get('/show', function (req, res) {
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection('posts')
            .find()
            .toArray()
            .then(user => {
                const output = { result: 'ok', message: user }
                res.json(output)
            })
        db.close()
    })
})

router.post('/add', function (req, res) {
    mongoClient.connect(mongo_string, function (err, db) {

        const data = {
            //post_id : req.body.answer_id,
            //post_user : req.body.user,
            title : req.body.title
        }
        db.collection('posts')
            .insertOne(data, (err, result) => {
                if (err) throw err
                const response = { result: 'ok', message: result.result.n + 'Inserted' }
                res.json(response)
            })
        db.close()
    })
})

router.delete('/delete/:name', function (req, res) {
    const query = { name: req.params.name }
    mongoClient.connect(mongo_string, function (err, db) {
        db.collection('posts')
            .deleteMany(query, function (err, result) {
                const response = { result: 'ok', message: result.result.n + 'Deleted' }
                res.json(response)
            })
    })
})


module.exports = router