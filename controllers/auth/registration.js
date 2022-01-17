const { HttpCode } = require('../../libs/constants')
const authService = require('../../service/auth')

const registration = async (req, res, next) => {
  try {
    const { email } = req.body
    const isUserExist = await authService.isUserExist(email)
    if (isUserExist) {
      return res.status(HttpCode.CONFLICT).json({
        status: 'error',
        code: HttpCode.CONFLICT,
        message: 'Email is already exist',
      })
    }
    const data = await authService.create(req.body)
    res
      .status(HttpCode.CREATED)
      .json({ status: 'success', code: HttpCode.CREATED, data })
  } catch (err) {
    next(err)
  }
}

module.exports = registration
