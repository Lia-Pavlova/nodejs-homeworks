const listContacts = require('../../repository/listContacts')
const { HttpCode } = require('../../libs/constants')

const getAllList = async (req, res, next) => {
  console.log(req.query)
  const contacts = await listContacts(req.query)
  res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: { ...contacts } })
}

module.exports = getAllList
