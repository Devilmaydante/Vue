const _ = require('lodash');
const defaultConfig = require('./development');

module.exports = _.merge(defaultConfig, {
  app: {
    title: 'WeAreOpenSource Vue - Production Environment',
  },
});
