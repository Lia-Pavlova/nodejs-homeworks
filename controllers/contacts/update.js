import updateContact from '../../repository/updateContact'
import { HttpCode } from '../../libs/constants'
import { CustomError } from '../../libs/custom-error'

const update = async (req, res, next) => {
  const { id } = req.params
  const { id: userId } = req.user
  const contactUpdated = await updateContact(userId, id, req.body)
  if (contactUpdated) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contactUpdated } })
  }
  throw new CustomError(HttpCode.NOT_FOUND, 'Not found')
}

export default update
