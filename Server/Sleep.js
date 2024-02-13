const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());


const uri = 'mongodb+srv://janhavi:janhavi02@cluster0.anz3bbv.mongodb.net/SSS?retryWrites=true&w=majority';
const client = new MongoClient(uri);


client.connect()
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        const database = client.db('SSS');
        const collection = database.collection('meme');

     
        app.get('/', async (req, res) => {
            const result = await collection.find({}).toArray();
            res.json(result);
        });

    })
    .catch(err => {
        console.error('Error connecting to MongoDB Atlas', err);
    });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

