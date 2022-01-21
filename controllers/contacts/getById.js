import getContactById from '../../repository/getContactById'
import { HttpCode } from '../../libs/constants'
import { CustomError } from '../../libs/custom-error'

const getById = async (req, res, next) => {
  const { id } = req.params
  const { id: userId } = req.user
  const contact = await getContactById(userId, id)

  if (contact) {
    return res
      .status(HttpCode.OK)
      .json({ status: 'success', code: HttpCode.OK, data: { contact } })
  }
  throw new CustomError(HttpCode.NOT_FOUND, 'Not found')
}

export default getById
