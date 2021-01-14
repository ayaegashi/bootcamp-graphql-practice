// Importing Objection Models
const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
  }
}

const author = async (obj, { authorId }, context) => {
  try {
    const a = await Author.query().findOne('id', authorId)
    return a
  } catch (err) {
    console.log(err)
  }
}

// deconstructing author's id
const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const address = async ({ addressId }, params, context) => {
  const a = await Address.query().findOne('id', addressId)
  return a
}

const resolver = {
  Query: {
    allAuthors,
    author,
  },
  Author: {
    books,
    address,
  },
}

module.exports = resolver
