const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')
const contactsPath = path.join(__dirname, '../../db/contacts.json')

const readContent = async () => {
  const content = await fs.readFile(contactsPath, 'utf8')
  return JSON.parse(content)
}

const writeContent = async (content) => {
  await fs.writeFile(contactsPath, JSON.stringify(content, null, 2))
}

const addContact = async ({ name, email, phone }) => {
  const contacts = await readContent()
  const contactNew = { id: crypto.randomUUID(), name, email, phone }
  contacts.push(contactNew)
  await writeContent(contacts)
  return contactNew
}

module.exports = addContact
