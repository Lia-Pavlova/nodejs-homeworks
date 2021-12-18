const express = require('express')
const router = express.Router()

const {
  getAllList,
  getById,
  remove,
  add,
  update,
} = require('../../controllers/contacts/index')

const {
  validateCreate,
  validateUpdate,
} = require('../../middlewares/validation/contactValidation')

router.get('/', getAllList)

router.get('/:id', getById)

router.post('/', validateCreate, add)

router.delete('/:id', remove)

router.put('/:id', validateUpdate, update)

module.exports = router
