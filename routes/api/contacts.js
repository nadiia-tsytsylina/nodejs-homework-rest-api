const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { isValidId, validateBody, authenticate } = require('../../middlewares');
const { addSchema, updateFavoriteSchema } = require('../../models/contact');

router.get('/', authenticate, ctrl.listContacts);

router.get('/:contactId', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(addSchema), ctrl.addContact);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete('/:contactId', authenticate, isValidId, ctrl.removeContact);

module.exports = router;
