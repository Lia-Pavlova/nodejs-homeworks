const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')
const contactsPath = path.join(__dirname, 'contacts.json')

const readContent = async () => {
  const content = await fs.readFile(contactsPath, 'utf8')
  return JSON.parse(content)
}

const writeContent = async (content) => {
  await fs.writeFile(contactsPath, JSON.stringify(content, null, 2))
}

const listContacts = async () => await readContent()

const getContactById = async (contactId) => {
  const contacts = await readContent()
  return contacts.find((i) => i.id === contactId)
}

const removeContact = async (contactId) => {
  const contacts = await readContent()
  const contactsNew = contacts.filter((i) => i.id !== contactId)
  await writeContent(contactsNew)
}

const addContact = async ({ name, email, phone }) => {
  const contacts = await readContent()
  const contactNew = { id: crypto.randomUUID(), name, email, phone }
  contacts.push(contactNew)
  await writeContent(contacts)
  return contactNew
}

const updateContact = async (contactId, body) => {
  const contacts = await readContent()
  const index = contacts.findIndex((i) => i.id === contactId)
  if (index !== -1) {
    const contactUpdated = { id: contactId, ...contacts[index], ...body }
    contacts[index] = contactUpdated
    await writeContent(contacts)
    return contactUpdated
  }
  return null
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
