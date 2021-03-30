'use strict';
const express = require('express');
const validator = require('../middlewares/validator.js');
const Person = require('../models/person.js');
const person = new Person();
const router = express.Router();

router.get('/', getPeople);
router.get('/:id', validator, getPersonById);
router.post('/', createPerson);
router.put('/:id', validator, updatePerson);
router.delete('/:id', validator, deletePerson);
// these are the Controller functions can be moved to /controllers/person.js
function getPeople(req, res) {
  const resObj = person.read();
  res.json(resObj);
}

function getPersonById(req, res) {
  const resObj = person.read(req.params.id);
  res.json(resObj);
}

function createPerson(req, res) {
  const personObject = req.body;
  const resObj = person.create(personObject);
  res.status(201).json(resObj);
}

function updatePerson(req, res) {
  const personObject = req.body;
  const resObj = person.update(req.params.id, personObject);
  res.json(resObj);
}

function deletePerson(req, res) {
  const resObj = person.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
