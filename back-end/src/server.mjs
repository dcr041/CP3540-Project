import express from 'express';

import {MongoClient} from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

import http from 'http';
import https from 'https';
import fs from 'fs';

// import packages
const https = require('https');
const fs = require('fs');

// serve the API with signed certificate on 443 (SSL/HTTPS) port
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/quizarama.ca/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/quizarama.ca/fullchain.pem'),
}, app);

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});

const http = require('http');

// serve the API on 80 (HTTP) port
const httpServer = http.createServer(app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/sports', async (req, res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});

        const db = client.db('sports');

        const sportsInfo = await db.collection('mySports').find({}).toArray();
        console.log(sportsInfo);
        res.status(200).json(sportsInfo);

        client.close();
    }
    catch(error) {
        res.status(500).json({message: "Error connecting to db", error});
    }
});

app.post('/api/overwriteSports', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let sportsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('sports');
    
            await db.collection('mySports').deleteMany( {} );
            await db.collection('mySports').insertMany(sportsData);
            res.status(200).json(sportsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addSports', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let sportsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('sports');
    
            await db.collection('mySports').insertMany(sportsData);
            res.status(200).json(sportsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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
        res.status(500).json({message: "Error connecting to db", error});
    }
});

app.post('/api/overwriteBoardGames', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let boardGamesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('boardGames');
    
            await db.collection('myBoardGames').deleteMany( {} );
            await db.collection('myBoardGames').insertMany(boardGamesData);
            res.status(200).json(boardGamesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addBoardGames', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let boardGamesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('boardGames');
    
            await db.collection('myBoardGames').insertMany(boardGamesData);
            res.status(200).json(boardGamesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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
        res.status(500).json({message: "Error connecting to db", error});
    }
});

app.post('/api/overwriteVideoGames', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let videoGamesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('videoGames');
    
            await db.collection('myVideoGames').deleteMany( {} );
            await db.collection('myVideoGames').insertMany(videoGamesData);
            res.status(200).json(videoGamesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addVideoGames', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let videoGamesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('videoGames');
    
            await db.collection('myVideoGames').insertMany(videoGamesData);
            res.status(200).json(videoGamesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteMusic', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let musicData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('music');
    
            await db.collection('myMusic').deleteMany( {} );
            await db.collection('myMusic').insertMany(musicData);
            res.status(200).json(musicData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addMusic', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let musicData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('music');
    
            await db.collection('myMusic').insertMany(musicData);
            res.status(200).json(musicData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteCelebrities', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let celebritiesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('celebrities');
    
            await db.collection('myCelebrities').deleteMany( {} );
            await db.collection('myCelebrities').insertMany(celebritiesData);
            res.status(200).json(celebritiesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addCelebrities', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let celebritiesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('celebrities');
    
            await db.collection('myCelebrities').insertMany(celebritiesData);
            res.status(200).json(celebritiesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteArt', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let artData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('art');
    
            await db.collection('myArt').deleteMany( {} );
            await db.collection('myArt').insertMany(artData);
            res.status(200).json(artData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addArt', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let artData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('art');
    
            await db.collection('myArt').insertMany(artData);
            res.status(200).json(artData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteScienceNature', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let scienceNatureData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('scienceNature');
    
            await db.collection('myScienceNature').deleteMany( {} );
            await db.collection('myScienceNature').insertMany(scienceNatureData);
            res.status(200).json(scienceNatureData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addScienceNature', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let scienceNatureData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('scienceNature');
    
            await db.collection('myScienceNature').insertMany(scienceNatureData);
            res.status(200).json(scienceNatureData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteGeography', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let geographyData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('geography');
    
            await db.collection('myGeography').deleteMany( {} );
            await db.collection('myGeography').insertMany(geographyData);
            res.status(200).json(geographyData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addGeography', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let geographyData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('geography');
    
            await db.collection('myGeography').insertMany(geographyData);
            res.status(200).json(geographyData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteAnimals', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let animalsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('animals');
    
            await db.collection('myAnimals').deleteMany( {} );
            await db.collection('myAnimals').insertMany(animalsData);
            res.status(200).json(animalsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addAnimals', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let animalsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('animals');
    
            await db.collection('myAnimals').insertMany(animalsData);
            res.status(200).json(animalsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteVehicles', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let vehiclesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('vehicles');
    
            await db.collection('myVehicles').deleteMany( {} );
            await db.collection('myVehicles').insertMany(vehiclesData);
            res.status(200).json(vehiclesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addVehicles', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let vehiclesData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('vehicles');
    
            await db.collection('myVehicles').insertMany(vehiclesData);
            res.status(200).json(vehiclesData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteMathematics', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let mathematicsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('mathematics');
    
            await db.collection('myMathematics').deleteMany( {} );
            await db.collection('myMathematics').insertMany(mathematicsData);
            res.status(200).json(mathematicsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addMathematics', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let mathematicsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('mathematics');
    
            await db.collection('myMathematics').insertMany(mathematicsData);
            res.status(200).json(mathematicsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteGadgetsComputers', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let gadgetsComputersData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('gadgetsComputers');
    
            await db.collection('myGadgetsComputers').deleteMany( {} );
            await db.collection('myGadgetsComputers').insertMany(gadgetsComputersData);
            res.status(200).json(gadgetsComputersData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addGadgetsComputers', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let gadgetsComputersData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('gadgetsComputers');
    
            await db.collection('myGadgetsComputers').insertMany(gadgetsComputersData);
            res.status(200).json(gadgetsComputersData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwritePolitics', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let politicsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('politics');
    
            await db.collection('myPolitics').deleteMany( {} );
            await db.collection('myPolitics').insertMany(politicsData);
            res.status(200).json(politicsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addPolitics', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let politicsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('politics');
    
            await db.collection('myPolitics').insertMany(politicsData);
            res.status(200).json(politicsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteHistoryMythology', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let historyMythologyData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('historyMythology');
    
            await db.collection('myHistoryMythology').deleteMany( {} );
            await db.collection('myHistoryMythology').insertMany(historyMythologyData);
            res.status(200).json(historyMythologyData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addHistoryMythology', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let historyMythologyData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('historyMythology');
    
            await db.collection('myHistoryMythology').insertMany(historyMythologyData);
            res.status(200).json(historyMythologyData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteGeneralKnowledge', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let generalKnowledgeData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('generalKnowledge');
    
            await db.collection('myGeneralKnowledge').deleteMany( {} );
            await db.collection('myGeneralKnowledge').insertMany(generalKnowledgeData);
            res.status(200).json(generalKnowledgeData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addGeneralKnowledge', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let generalKnowledgeData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('generalKnowledge');
    
            await db.collection('myGeneralKnowledge').insertMany(generalKnowledgeData);
            res.status(200).json(generalKnowledgeData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteFilm', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let filmData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('film');
    
            await db.collection('myFilm').deleteMany( {} );
            await db.collection('myFilm').insertMany(filmData);
            res.status(200).json(filmData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addFilm', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let filmData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('film');
    
            await db.collection('myFilm').insertMany(filmData);
            res.status(200).json(filmData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteCartoonsAnimation', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let cartoonsAnimationData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('cartoonsAnimation');
    
            await db.collection('myCartoonsAnimation').deleteMany( {} );
            await db.collection('myCartoonsAnimation').insertMany(cartoonsAnimationData);
            res.status(200).json(cartoonsAnimationData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addCartoonsAnimation', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let cartoonsAnimationData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('cartoonsAnimation');
    
            await db.collection('myCartoonsAnimation').insertMany(cartoonsAnimationData);
            res.status(200).json(cartoonsAnimationData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteTelevision', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let televisionData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('television');
    
            await db.collection('myTelevision').deleteMany( {} );
            await db.collection('myTelevision').insertMany(televisionData);
            res.status(200).json(televisionData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addTelevision', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let televisionData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('television');
    
            await db.collection('myTelevision').insertMany(televisionData);
            res.status(200).json(televisionData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteComics', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let comicsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('comics');
    
            await db.collection('myComics').deleteMany( {} );
            await db.collection('myComics').insertMany(comicsData);
            res.status(200).json(comicsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addComics', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let comicsData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('comics');
    
            await db.collection('myComics').insertMany(comicsData);
            res.status(200).json(comicsData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteBooks', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let booksData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('books');
    
            await db.collection('myBooks').deleteMany( {} );
            await db.collection('myBooks').insertMany(booksData);
            res.status(200).json(booksData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addBooks', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let booksData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('books');
    
            await db.collection('myBooks').insertMany(booksData);
            res.status(200).json(booksData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
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

app.post('/api/overwriteAnimeManga', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let animeMangaData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('animeManga');
    
            await db.collection('myAnimeManga').deleteMany( {} );
            await db.collection('myAnimeManga').insertMany(animeMangaData);
            res.status(200).json(animeMangaData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.post('/api/addAnimeManga', async(req, res) => {
    const apiKey = "5fc4b71d86d4400fa7088bdca284e2a1";
    console.log(req.headers);

    if (req.headers.apikey == apiKey) {
        try{
            let animeMangaData = req.body
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('animeManga');
    
            await db.collection('myAnimeManga').insertMany(animeMangaData);
            res.status(200).json(animeMangaData);
            client.close();
        }
        catch (error) {
            res.status(500).json({message: "Error connecting to db", error});
        }
    } else {
        res.status(500).json({message: "Invalid API Key"});
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen( 8000, () => console.log( "server is listening on port 8000"));