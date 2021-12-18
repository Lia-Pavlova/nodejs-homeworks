const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, '../../db/contacts.json')

const readContent = async () => {
  const content = await fs.readFile(contactsPath, 'utf8')
  return JSON.parse(content)
}

const getContactById = async (contactId) => {
  const contacts = await readContent()
  return contacts.find((i) => i.id === contactId)
}

module.exports = getContactById
