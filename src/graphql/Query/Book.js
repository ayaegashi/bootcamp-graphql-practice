const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch (err) {
    console.log(err)
  }
}

const searchBooks = async (obj, { input }, context) => {
  try {
    const book = await Book.query().where('title', 'like', `%${input}%`)
    return book
  } catch (err) {
    console.log(err)
  }
}

const author = async ({ authorId }, params, context) => {
  const a = await Author.query().findOne('id', authorId)
  return a
}

const publisher = async ({ publisherId }, params, context) => {
  const p = await Publisher.query().findOne('id', publisherId)
  return p
}

const resolver = {
  Query: {
    allBooks,
    searchBooks,
  },
  Book: {
    author,
    publisher,
  },
}

module.exports = resolver
