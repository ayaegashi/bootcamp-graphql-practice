const Author = require('../../models/Author')

const createAuthor = async (obj, { input }, context) => {
  try {
    const a = await Author.query().insert(input).returning('*')
    return a
  } catch (err) {
    console.log(err)
  }
}

const resolver = {
  Mutation: {
    createAuthor,
  },
}

module.exports = resolver
