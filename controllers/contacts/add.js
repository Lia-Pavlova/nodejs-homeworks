import addContact from '../../repository/addContact'
import { HttpCode } from '../../libs/constants'

const add = async (req, res, next) => {
  const { id: userId } = req.user
  const contactNew = await addContact(userId, req.body)
  res.status(HttpCode.CREATED).json({
    status: 'success',
    code: HttpCode.OK,
    data: { contact: contactNew },
  })
}

export default add
