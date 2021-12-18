const getContactById = require('../../models/contacts/getContactById')

const getById = async (req, res, next) => {
  const id = req.params.id
  const contact = await getContactById(id)
  if (!contact) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  res.status(200).json({ contact })
}

module.exports = getById
