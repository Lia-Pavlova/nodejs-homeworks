const addContact = require('../../repository/addContact')
const { HttpCode } = require('../../libs/constants')

const add = async (req, res, next) => {
  const { id: userId } = req.user
  const contactNew = await addContact(userId, req.body)
  res.status(HttpCode.CREATED).json({
    status: 'success',
    code: HttpCode.OK,
    data: { contact: contactNew },
  })
}

module.exports = add
