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
import wrapperError from '../../middlewares/error-handler'

const router = new Router()

router.get('/', [guard, validateQuery], wrapperError(getAllList))

router.get('/:id', [guard, validateId], wrapperError(getById))

router.post('/', [guard, validateCreate], wrapperError(add))

router.delete('/:id', [guard, validateId], wrapperError(remove))

router.put('/:id', [guard, validateId, validateUpdate], wrapperError(update))

router.patch(
  '/:id/favorite',
  [guard, validateId, validateUpdateFavorite],
  wrapperError(update),
)

export default router
