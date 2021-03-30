'use strict';
const uuid = require('uuid').v4;
class Person {
  constructor() {
    this.db = [];
    // [{id,data:{name,role}},....]
  }
  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.db.push(record);
    return record;
  }
  read(id) {
    if (id) {
      return this.db.find((record) => record.id === id);
    } else {
      return this.db;
    }
  }
  update(id, obj) {
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].id === id) {
        this.db[i].data = obj;
        return this.db[i];
      }
    }
  }
  delete(id) {
    this.db = this.db.filter((person) => person.id !== id);
    return this.db;
  }
}

module.exports = Person;
