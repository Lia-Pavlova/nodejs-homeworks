import removeContact from '../../repository/removeContact'
import { HttpCode } from '../../libs/constants'

const remove = async (req, res, next) => {
  const { id } = req.params
  const { id: userId } = req.user
  const contactToDelete = await removeContact(userId, id)
  if (contactToDelete) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contactToDelete } })
  }
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' })
}

export default remove
