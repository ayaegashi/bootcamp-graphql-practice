
exports.up = knex => knex.schema.createTable('publishers', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
    .onDelete('CASCADE')

  table.string('company').notNullable()

  table.string('phoneNumber').unique()

  table.integer('numBooksPublished').defaultTo(0)

  table
    .uuid('addressId')
    .references('addresses.id')
    .onDelete('CASCADE')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('publishers')
