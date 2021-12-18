const updateContact = require('../../models/contacts/updateContact')

const update = async (req, res, next) => {
  const id = req.params.id
  const contactUpdated = await updateContact(id, req.body)
  if (contactUpdated) {
    return res.status(200).json(contactUpdated)
  }
  res.status(404).json({ message: 'Not found' })
}

module.exports = update
