const getContactById = require('../../repository/getContactById')
const { HttpCode } = require('../../libs/constants')

const getById = async (req, res, next) => {
  const { id } = req.params
  const contact = await getContactById(id)
  console.log(contact)
  if (contact) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contact } })
  }
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' })
}

module.exports = getById
