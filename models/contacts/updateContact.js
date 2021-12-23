const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, '../../db/contacts.json')

const readContent = async () => {
  const content = await fs.readFile(contactsPath, 'utf8')
  return JSON.parse(content)
}

const writeContent = async (content) => {
  await fs.writeFile(contactsPath, JSON.stringify(content, null, 2))
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

module.exports = updateContact
