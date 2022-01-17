const { HttpCode } = require('../../libs/constants')
const authService = require('../../service/auth')

const subscriptionUpdate = async (req, res, _next) => {
  const { subscription } = req.body

  if (
    subscription !== 'starter' &&
    subscription !== 'pro' &&
    subscription !== 'business'
  ) {
    await authService.setSubscription(req.user.id, subscription)
    const { email } = req.user
    res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      data: { email, subscription: subscription },
    })
  } else {
    return res.status(HttpCode.BAD_REQUEST).json({
      status: 'error',
      code: HttpCode.BAD_REQUEST,
      message: `Subscription ${subscription} is not allowed`,
    })
  }
}

module.exports = subscriptionUpdate
