const Publisher = require('../../models/Publisher')

const changePublisherName = async (obj, { id, newName }, context) => {
  try {
    const p = await Publisher.query().patch({ company: newName }).findOne('id', id).returning('*')
    console.log(p)
    return p
  } catch (err) {
    console.log(err)
  }
}

const resolver = {
  Mutation: {
    changePublisherName,
  },
}

module.exports = resolver
