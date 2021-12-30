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

const guard = require('../../middlewares/guard')

router.get('/', [guard, validateQuery], getAllList)

router.get('/:id', [guard, validateId], getById)

router.post('/', [guard, validateCreate], add)

router.delete('/:id', [guard, validateId], remove)

router.put('/:id', [guard, validateId, validateUpdate], update)

router.patch(
  '/:id/favorite',
  [guard, validateId, validateUpdateFavorite],
  update,
)

module.exports = router
