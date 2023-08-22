const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;


// middlewares
app.use(cors())
app.use(express.json())

// const users = require('./fake data/users.json')
const groups = require('./fake data/groups.json')
const messages = require('./fake data/messages.json')

// mongodb configuration

const uri = process.env.MONGODB_URI

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
        const database = client.db("ADDA");
        const usersCollection = database.collection("users");

        // create user to the database
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            console.log(`An user was inserted with the _id: ${result.insertedId}`);
            res.send(user)
        })

        // read users from database 
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({});
            const result = await cursor.toArray();
            res.send(result)
        })

        // read particular user from database
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { uid: id };
            const result = await usersCollection.findOne(query)
            res.send(result)
        })

        // update particular user in database
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { uid: id };

            const user = req.body;

            const options = {
                upsert: true
            };

            const updatedUser = {
                $set: {

                    uid: user.uid,
                    name: user.name,
                    email: user.email,
                    photoURL: user.photoURL,
                    gender: user.gender,
                    dateOfBirth: user.dateOfBirth,
                    occupation: user.occupation,
                    institute: user.institute,
                    address: user.address
                }
            }

            const result = await usersCollection.updateOne(filter, updatedUser, options);
        })

        // delete particular user in database
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { uid: id };
            const result = await usersCollection.deleteOne(query);
            res.send(result)
        })

    } finally {

    }
}
run().catch(err => console.dir(err));


// api

app.get('/', (req, res) => {
    res.send('ADDA Server running')
})

// app.get('/users', (req, res) => {
//     res.send(users)
// })

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

