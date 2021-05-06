const fruitsModel = require('./fruits.schema.js');

// All Serverless functions

exports.handler = async (event) => {
  try {
    const id = event.pathParameters && event.pathParameters.id;
    let data;
    if (id) {
      const docs = await fruitsModel.query('id').eq(id).exec();
      data = docs[0];
    } else {
      data = await fruitsModel.scan().exec();
    }
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
