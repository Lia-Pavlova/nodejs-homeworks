const addContact = require('../../models/contacts/addContact')

const add = async (req, res, next) => {
  const contactNew = await addContact(req.body)
  res.status(201).json({ contactNew })
}

module.exports = add
