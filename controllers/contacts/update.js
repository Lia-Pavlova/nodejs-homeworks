const updateContact = require('../../repository/updateContact')
const { HttpCode } = require('../../libs/constants')

const update = async (req, res, next) => {
  const { id } = req.params
  const { id: userId } = req.user
  const contactUpdated = await updateContact(userId, id, req.body)
  if (contactUpdated) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contactUpdated } })
  }
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' })
}

module.exports = update
