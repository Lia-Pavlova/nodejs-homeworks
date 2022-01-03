const { HttpCode } = require('../../libs/constants')
const AuthService = require('../../service/auth')
const authService = new AuthService()

const subscriptionUpdate = async (req, res, _next) => {
  const { subscription } = req.body

  if (
    subscription !== 'starter' &&
    subscription !== 'pro' &&
    subscription !== 'business'
  ) {
    const { email } = req.user
    await authService.setSubscription(req.user.id, subscription)
    res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      data: { email, subscription: subscription },
    })
  } else {
    return res.status(HttpCode.BAD_REQUEST).json({
      status: 'success',
      code: HttpCode.BAD_REQUEST,
      message: `Subscription ${subscription} is not allowed`,
    })
  }
}

module.exports = subscriptionUpdate
