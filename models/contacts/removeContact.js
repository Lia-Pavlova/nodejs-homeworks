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

const removeContact = async (contactId) => {
  const contacts = await readContent()
  const contactsNew = contacts.filter((i) => i.id !== contactId)
  await writeContent(contactsNew)
}

module.exports = removeContact
