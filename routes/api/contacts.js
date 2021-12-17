const express = require('express')
const router = express.Router()

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../model/index')

const { validateCreate, validateUpdate } = require('./validation')

router.get('/', async (req, res, next) => {
  const contacts = await listContacts()
  res.status(200).json({ contacts })
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id
  const contact = await getContactById(id)
  if (!contact) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  res.status(200).json({ contact })
})

router.post('/', validateCreate, async (req, res, next) => {
  const contactNew = await addContact(req.body)
  res.status(201).json({ contactNew })
})

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id
  const contactToDelete = await getContactById(id)
  if (!contactToDelete) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  await removeContact(id)
  res.status(200).json({ message: 'Contact deleted' })
})

router.put('/:id', validateUpdate, async (req, res, next) => {
  const id = req.params.id
  const contactUpdated = await updateContact(id, req.body)
  if (contactUpdated) {
    return res.status(200).json(contactUpdated)
  }
  res.status(404).json({ message: 'Not found' })
})

module.exports = router
