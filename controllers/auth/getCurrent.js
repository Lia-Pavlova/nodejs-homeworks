import { HttpCode } from '../../libs/constants'

const getCurrent = (req, res, _next) => {
  const { email, subscription } = req.user
  res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
    data: { email, subscription },
  })
}

export default getCurrent
