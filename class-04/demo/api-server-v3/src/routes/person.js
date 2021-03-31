'use strict';
const express = require('express');
const validator = require('../middlewares/validator.js');
const Person = require('../models/interface.js');
const personModel = require('../models/person.js');
const person = new Person(personModel);
const router = express.Router();

router.get('/', getPeople);
router.get('/:id', validator, getPersonById);
router.post('/', createPerson);
router.put('/:id', validator, updatePerson);
router.delete('/:id', validator, deletePerson);
// these are the Controller functions can be moved to /controllers/person.js
async function getPeople(req, res, next) {
  try {
    const resObj = await person.read();
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

function getPersonById(req, res, next) {
  person
    .read(req.params.id)
    .then((responseData) => {
      res.json(responseData[0]);
    })
    .catch((error) => {
      next(error);
    });
}

async function createPerson(req, res) {
  const personObject = req.body;
  try {
    const resObj = await person.create(personObject);
    res.status(201).json(resObj);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updatePerson(req, res, next) {
  const personObject = req.body;
  try {
    const resObj = await person.update(req.params.id, personObject);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deletePerson(req, res, next) {
  try {
    const resObj = await person.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
