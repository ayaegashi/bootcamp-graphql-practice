const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    #retrieves all authors
    allAuthors: [Author!]!
    
    #retrieves all books
    allBooks: [Book!]!

    #retrieves a single author based on received id
    author(authorId: ID!): Author

    #searches for a specific book
    searchBooks(input: String!): [Book!]!
  }

  type Mutation {
    createAuthor(input: AddAuthorInput!): Author
    changePublisherName(id: ID!, newName: String!): Publisher!
  }

  input AddAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    addressId: ID
  }
  
  input AddAddressInput {
    street: String
    city: String
    state: String
    zip: String
  }

  type Book {
    id: ID
    title: String
    language: String
    numPages: Int
    datePublished: String
    bestseller: Boolean
    author: Author
    publisher: Publisher
    createdAt: String
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
    books: [Book!]!
    createdAt: String
  }

  type Address {
    id: ID
    street: String
    city: String
    state: String
    zip: String
    createdAt: String
  }

  type Publisher {
    id: ID
    company: String
    phoneNumber: String
    numBooksPublished: Int
    address: Address
    books: [Book!]!
    createdAt: String
  }
`
