const { HttpCode } = require('../libs/constants')
const { FORBIDDEN } = require('../libs/messages')

const guard = (role) => async (req, res, next) => {
  const roleCurrentUser = req.user.role
  if (roleCurrentUser !== role) {
    return res.status(HttpCode.FORBIDDEN).json({
      status: 'error',
      code: HttpCode.FORBIDDEN,
      message: FORBIDDEN[req.app.get('lang')],
    })
  }
  next()
}

module.exports = guard
