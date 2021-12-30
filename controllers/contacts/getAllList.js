const listContacts = require('../../repository/listContacts')
const { HttpCode } = require('../../libs/constants')

const getAllList = async (req, res, next) => {
  const { id: userId } = req.user
  const contacts = await listContacts(userId, req.query)
  res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: { ...contacts } })
}

module.exports = getAllList
