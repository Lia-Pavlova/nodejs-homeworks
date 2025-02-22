import { Router } from 'express'
import {
  registration,
  login,
  logout,
  getCurrent,
  subscriptionUpdate,
} from '../../controllers/auth'
import guard from '../../middlewares/guard'
import limiter from '../../middlewares/rate-limit'
import wrapperError from '../../middlewares/error-handler'

const router = new Router()

router.post(
  '/registration',
  limiter(15 * 60 * 1000, 2),
  wrapperError(registration),
)
router.post('/login', wrapperError(login))
router.post('/logout', guard, wrapperError(logout))
router.get('/getCurrent', guard, wrapperError(getCurrent))
router.patch('/', guard, wrapperError(subscriptionUpdate))

export default router
