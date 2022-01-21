import removeContact from '../../repository/removeContact'
import { HttpCode } from '../../libs/constants'
import { CustomError } from '../../libs/custom-error'

const remove = async (req, res, next) => {
  const { id } = req.params
  const { id: userId } = req.user
  const contactToDelete = await removeContact(userId, id)
  if (contactToDelete) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contactToDelete } })
  }
  throw new CustomError(HttpCode.NOT_FOUND, 'Not found')
}

export default remove
