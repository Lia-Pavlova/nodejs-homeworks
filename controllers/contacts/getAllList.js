const listContacts = require('../../models/contacts/listContacts')

const getAllList = async (req, res, next) => {
  const contacts = await listContacts()
  res.status(200).json({ contacts })
}

module.exports = getAllList
