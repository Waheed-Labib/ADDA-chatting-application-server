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
// const messages = require('./fake data/messages.json')

// mongodb configuration

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nbmbmyw.mongodb.net/?retryWrites=true&w=majority`

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
        const chatsCollection = database.collection("chats");

        // create user to the database
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            console.log(`An user was inserted with the _id: ${result.insertedId}`);
            res.send(result)
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
                    address: user.address,
                    chatBox: user.chatBox
                }
            }

            const result = await usersCollection.updateOne(filter, updatedUser, options);
            res.send(result)
        })

        // delete particular user in database
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { uid: id };
            const result = await usersCollection.deleteOne(query);
            res.send(result)
        })

        // create a new chat in tha database
        app.post('/chats', async (req, res) => {
            const chat = req.body;
            const result = await chatsCollection.insertOne(chat);
            console.log(`An chat was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })

        // get chats from database 
        app.get('/chats', async (req, res) => {
            const cursor = chatsCollection.find({});
            const result = await cursor.toArray();
            res.send(result)
        })

        // get particular chat from database
        app.get('/chats/:id', async (req, res) => {
            const id = parseInt(req.params.id);
            const query = { chatId: id };
            const result = await chatsCollection.findOne(query)
            res.send(result)
        })

        // update chat in database
        app.put('/chats/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { chatId: id };

            const chat = req.body;

            const options = {
                upsert: true
            };

            const updatedChat = {
                $set: {
                    chatId: chat.chatId,
                    messages: chat.messages
                }
            }

            const result = await chatsCollection.updateOne(filter, updatedChat, options);
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


app.get('/groups', (req, res) => {
    res.send(groups)
})




app.listen(port, () => {
    console.log('ADDA Server running on port : ', port)
})

