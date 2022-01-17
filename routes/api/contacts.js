import { Router } from 'express'
import {
  getAllList,
  getById,
  remove,
  add,
  update,
} from '../../controllers/contacts'

import {
  validateCreate,
  validateUpdate,
  validateId,
  validateUpdateFavorite,
  validateQuery,
} from '../../middlewares/validation/contactValidation'

import guard from '../../middlewares/guard'

const router = new Router()

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

export default router
