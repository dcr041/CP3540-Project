import express from 'express';

import {MongoClient} from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/animals', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('animals');

        const movieInfo = await db.collection('myanimals').find({}).toArray();
        console.log(movieInfo);
        res.status(200).json(movieInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/geography', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('geography');

        const movieInfo = await db.collection('mygeography').find({}).toArray();
        console.log(movieInfo);
        res.status(200).json(movieInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/sports', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('sports');

        const movieInfo = await db.collection('mysports').find({}).toArray();
        console.log(movieInfo);
        res.status(200).json(movieInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen( 8000, () => console.log( "server is listening on port 8000"));