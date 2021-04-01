'use strict';
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
});
// this line will create the collection (sql table) with name 'person'
const personModel = mongoose.model('person', personSchema);

module.exports = personModel;
