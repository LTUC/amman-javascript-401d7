const uuid = require('uuid').v4;
const fruitsModel = require('./fruits.schema.js');

// All Serverless functions

exports.handler = async (event) => {
  try {
    const { name, cal } = JSON.parse(event.body);
    const id = uuid();
    const record = new fruitsModel({ id, name, cal });
    const data = await record.save();
    return {
      statusCode: 201,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      response: error.message,
    };
  }
};
