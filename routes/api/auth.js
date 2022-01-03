const express = require('express')
const router = express.Router()
const {
  registration,
  login,
  logout,
  getCurrent,
  subscriptionUpdate,
} = require('../../controllers/auth')
const guard = require('../../middlewares/guard')
const limiter = require('../../middlewares/rate-limit')

router.post('/registration', limiter(15 * 60 * 1000, 2), registration)
router.post('/login', login)
router.post('/logout', guard, logout)
router.get('/getCurrent', guard, getCurrent)
router.patch('/', guard, subscriptionUpdate)

module.exports = router
