'use strict';

const co = require('co');
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });

module.exports.hello = (event, context, cb) => {

  console.log('test1');

  co(function* () {
    console.log('test2');

    const result = yield [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];

    console.log(`test3 ${result}`);

    const response = {
      statusCode: 200,
      body: JSON.stringify(result)
    };

    console.log('test4');

    cb(null, response);
  });
};

module.exports.call = (event, context, cb) => {
  console.log('----------test1----------');
  const params = {
    FunctionName: 'sample-dev-hello',
    InvocationType: 'RequestResponse'
  };
  console.log('----------test2----------');
  lambda.invoke(params, (err, data) => {
    console.log('----------test3----------');
    cb(err, data);
  });
};
