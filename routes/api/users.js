import { Router } from 'express'
import {
  aggregation,
  uploadAvatar,
  verifyUser,
  repeatEmailForVerifyUser,
} from '../../controllers/users'
import guard from '../../middlewares/guard'
import { upload } from '../../middlewares/upload'
import roleAccess from '../../middlewares/role-access'
import { Role } from '../../libs/constants'
import wrapperError from '../../middlewares/error-handler'

const router = new Router()

router.get(
  '/stats/:id',
  guard,
  roleAccess(Role.ADMIN),
  wrapperError(aggregation),
)
router.patch(
  '/avatars',
  guard,
  upload.single('avatar'),
  wrapperError(uploadAvatar),
)
router.get('/verify/:token', wrapperError(verifyUser))
router.post('/verify', wrapperError(repeatEmailForVerifyUser))

export default router
