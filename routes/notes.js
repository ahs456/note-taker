const notes = require('express').Router();
const {v4:uuidv4} = require('uuid');
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    console.info(`${req.method} requested for the notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
