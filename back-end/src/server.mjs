import express from 'express';

import {MongoClient} from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/data', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('movies');

        const movieInfo = await db.collection('mymovies').find({}).toArray();
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