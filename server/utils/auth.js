const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ github, name, _id }) {
    const payload = { github, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
