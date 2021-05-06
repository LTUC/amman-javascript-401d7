const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

// we need the SNS topic (this can be copied from the SNS service under ARN)

const topic = 'arn:aws:sns:us-west-2:128940465845:pickup';

// we will get the input from the terminal e.g node index.js x y

// console.log(process.argv[2]);

const orderItem = process.argv[2];
const order = {
  storeName: 'ASAC Store',
  orderItem,
};

const params = {
  TopicArn: topic,
  Message: JSON.stringify(order),
};

// we need to publish the message so clients can read!

sns.publish(params).promise().then(console.log).catch(console.error);
