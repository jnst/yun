'use strict';

const co = require('co');

module.exports.hello = (event, context, callback) => {

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

    callback(null, response);
  });
};
