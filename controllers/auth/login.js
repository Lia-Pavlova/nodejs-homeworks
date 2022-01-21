import { HttpCode } from '../../libs/constants'
import authService from '../../service/auth'
import { CustomError } from '../../libs/custom-error'

const login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await authService.getUser(email, password)
  if (!user) {
    throw new CustomError(HttpCode.UNAUTHORIZED, 'Invalid credentials')
  }
  const token = authService.getToken(user)
  await authService.setToken(user.id, token)
  res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: { token } })
}

export default login
