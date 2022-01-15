const express = require('express')
const router = express.Router()
const { aggregation } = require('../../controllers/users')
const guard = require('../../middlewares/guard')
const roleAccess = require('../../middlewares/role-access')
const { Role } = require('../../libs/constants')

router.get('/stats/:id', guard, roleAccess(Role.ADMIN), aggregation)

module.exports = router
