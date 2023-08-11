const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const users = require('./fake data/users.json')
const groups = require('./fake data/groups.json')
const messages = require('./fake data/messages.json')

app.get('/', (req, res) => {
    res.send('ADDA Server running')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/groups', (req, res) => {
    res.send(groups)
})

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.listen(port, () => {
    console.log('ADDA Server running on port : ', port)
})