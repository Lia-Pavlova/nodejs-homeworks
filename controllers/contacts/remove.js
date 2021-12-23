const getContactById = require('../../models/contacts/getContactById')
const removeContact = require('../../models/contacts/removeContact')

const remove = async (req, res, next) => {
  const id = req.params.id
  const contactToDelete = await getContactById(id)
  if (!contactToDelete) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  await removeContact(id)
  res.status(200).json({ message: 'Contact deleted' })
}

module.exports = remove
