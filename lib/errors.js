'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on orecore-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('orecore-lib').errors.extend(spec);

