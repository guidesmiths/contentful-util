const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'contentful-util' })
  .bootstrap(join(__dirname, 'components'));
