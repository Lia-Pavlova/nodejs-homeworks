const Contact = require('../model/contact')

const addContact = async (userId, body) => {
  const result = await Contact.create({ ...body, owner: userId })
  return result
}

module.exports = addContact
