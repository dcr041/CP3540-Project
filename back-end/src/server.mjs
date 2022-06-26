import express from 'express';

import {MongoClient} from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/sports', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('sports');

        const sportsInfo = await db.collection('mysports').find({}).toArray();
        console.log(sportsInfo);
        res.status(200).json(sportsInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/boardGames', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('boardGames');

        const boardGamesInfo = await db.collection('myBoardGames').find({}).toArray();
        console.log(boardGamesInfo);
        res.status(200).json(boardGamesInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/videoGames', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('videoGames');

        const videoGamesInfo = await db.collection('myVideoGames').find({}).toArray();
        console.log(videoGamesInfo);
        res.status(200).json(videoGamesInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/music', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('music');

        const musicInfo = await db.collection('myMusic').find({}).toArray();
        console.log(musicInfo);
        res.status(200).json(musicInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/celebrities', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('celebrities');

        const celebritiesInfo = await db.collection('myCelebrities').find({}).toArray();
        console.log(celebritiesInfo);
        res.status(200).json(celebritiesInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/art', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('art');

        const artInfo = await db.collection('myArt').find({}).toArray();
        console.log(artInfo);
        res.status(200).json(artInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/scienceNature', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('scienceNature');

        const scienceNatureInfo = await db.collection('myScienceNature').find({}).toArray();
        console.log(scienceNatureInfo);
        res.status(200).json(scienceNatureInfo);

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

        const geographyInfo = await db.collection('myGeography').find({}).toArray();
        console.log(geographyInfo);
        res.status(200).json(geographyInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/animals', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('animals');

        const animalsInfo = await db.collection('myAnimals').find({}).toArray();
        console.log(animalsInfo);
        res.status(200).json(animalsInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/vehicles', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('vehicles');

        const vehiclesInfo = await db.collection('myVehicles').find({}).toArray();
        console.log(vehiclesInfo);
        res.status(200).json(vehiclesInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/mathematics', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('mathematics');

        const mathematicsInfo = await db.collection('myMathematics').find({}).toArray();
        console.log(mathematicsInfo);
        res.status(200).json(mathematicsInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/gadgetsComputers', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('gadgetsComputers');

        const gadgetsComputersInfo = await db.collection('myGadgetsComputers').find({}).toArray();
        console.log(gadgetsComputersInfo);
        res.status(200).json(gadgetsComputersInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/politics', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('politics');

        const politicsInfo = await db.collection('myPolitics').find({}).toArray();
        console.log(politicsInfo);
        res.status(200).json(politicsInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/historyMythology', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('historyMythology');

        const historyMythologyInfo = await db.collection('myHistoryMythology').find({}).toArray();
        console.log(historyMythologyInfo);
        res.status(200).json(historyMythologyInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/generalKnowledge', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('generalKnowledge');

        const generalKnowledge = await db.collection('myGeneralKnowledge').find({}).toArray();
        console.log(generalKnowledge);
        res.status(200).json(generalKnowledge);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/film', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('film');

        const filmInfo = await db.collection('myFilm').find({}).toArray();
        console.log(filmInfo);
        res.status(200).json(filmInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/cartoonsAnimation', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('cartoonsAnimation');

        const cartoonsAnimation = await db.collection('myCartoonsAnimation').find({}).toArray();
        console.log(cartoonsAnimation);
        res.status(200).json(cartoonsAnimation);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/television', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('television');

        const televisionInfo = await db.collection('myTelevision').find({}).toArray();
        console.log(televisionInfo);
        res.status(200).json(televisionInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/comics', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('comics');

        const comicsInfo = await db.collection('myComics').find({}).toArray();
        console.log(comicsInfo);
        res.status(200).json(comicsInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/books', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('books');

        const booksInfo = await db.collection('myBooks').find({}).toArray();
        console.log(booksInfo);
        res.status(200).json(booksInfo);

        client.close();
    }
    catch( error ) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.get('/api/animeManga', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('animeManga');

        const animeMangaInfo = await db.collection('myAnimeManga').find({}).toArray();
        console.log(animeMangaInfo);
        res.status(200).json(animeMangaInfo);

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