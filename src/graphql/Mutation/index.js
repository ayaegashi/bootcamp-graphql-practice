const merge = require('lodash.merge')
const Author = require('./Author')
const Publisher = require('./Publisher')

const resolvers = [Author, Publisher]

module.exports = merge(...resolvers)
