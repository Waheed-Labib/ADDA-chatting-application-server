const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('ADDA Server running')
})

const messages = [
    {
        Id: 1,
        username: 'Ali Baba',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 2,
        username: 'Angel Sadiya',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 3,
        username: 'Mati Baba',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 4,
        username: 'Ali Baba',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 5,
        username: 'Rahim Majhi',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 6,
        username: 'Angel Sadiya',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 7,
        username: 'Pinaki Vai',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 8,
        username: 'Ali Baba',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 9,
        username: 'Sukanato Das',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    },
    {
        Id: 10,
        username: 'Rahim Majhi',
        userImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.1.1203103457.1659020646&semt=sph',
        message: 'Hi. My name is Ali Baba'
    }
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.listen(port, () => {
    console.log('ADDA Server running on port : ', port)
})