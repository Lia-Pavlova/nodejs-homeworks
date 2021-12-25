const Contact = require('../model/contact')

const getContactById = async (contactId) => {
  const result = await Contact.findById(contactId)
  return result
}

module.exports = getContactById
