const notes = require('express').Router();
const {v4:uuidv4} = require('uuid');
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/fsUtils');
const { json } = require('express');

notes.get('/', (req, res) => {
    console.info(`${req.method} requested for the notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.tip_id === tipId);
        return result.length > 0
        ? res.json(result)
        : res.json('ID not associated with any note');
    });
});