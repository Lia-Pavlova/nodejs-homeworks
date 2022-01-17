// const { Router } = require('express')
// const router = Router()
const express = require('express')
const router = express.Router()
const { aggregation, uploadAvatar } = require('../../controllers/users/index')
const guard = require('../../middlewares/guard')
const { upload } = require('../../middlewares/upload')
const roleAccess = require('../../middlewares/role-access')
const { Role } = require('../../libs/constants')

router.get('/stats/:id', guard, roleAccess(Role.ADMIN), aggregation)
router.patch('/avatars', guard, upload.single('avatar'), uploadAvatar)

module.exports = router
