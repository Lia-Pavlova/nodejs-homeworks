const { HttpCode } = require('../../libs/constants')
const authService = require('../../service/auth')

const logout = async (req, res, next) => {
  await authService.setToken(req.user.id, null)
  res
    .status(HttpCode.NO_CONTENT)
    .json({ status: 'success', code: HttpCode.OK, data: {} })
}

module.exports = logout
