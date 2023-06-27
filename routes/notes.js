const notes = require('express').Router();
const {v4:uuidv4} = require('uuid');
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/fsUtils');
