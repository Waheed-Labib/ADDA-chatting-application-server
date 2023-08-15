const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000;


// middlewares
app.use(cors())
app.use(express.json())

const users = require('./fake data/users.json')
const groups = require('./fake data/groups.json')
const messages = require('./fake data/messages.json')

// mongodb configuration

const uri = "mongodb+srv://process.env.DB_USER:process.env.DB_PASSWORD@cluster0.nbmbmyw.mongodb.net/?retryWrites=true&w=majority"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");
        // create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await haiku.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } finally {

    }
}
run().catch(console.dir);


// api

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

app.post('/messages', (req, res) => {
    console.log('POST api called');
    const message = req.body;
    message.msgId = messages.length + 1;
    messages.push(message);
    res.send(message)
})

app.listen(port, () => {
    console.log('ADDA Server running on port : ', port)
})

