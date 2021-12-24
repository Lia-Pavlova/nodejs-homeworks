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
  validateId,
  validateUpdateFavorite,
  validateQuery,
} = require('../../middlewares/validation/contactValidation')

router.get('/', validateQuery, getAllList)

router.get('/:id', validateId, getById)

router.post('/', validateCreate, add)

router.delete('/:id', validateId, remove)

router.put('/:id', validateId, validateUpdate, update)

router.patch('/:id/favorite', validateId, validateUpdateFavorite, update)

module.exports = router
