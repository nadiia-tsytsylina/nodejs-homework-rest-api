const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { isValidId, validateBody } = require('../../middlewares');
const { addSchema, updateFavoriteSchema } = require('../../models/contact');

router.get('/', ctrl.listContacts);

router.get('/:contactId', isValidId, ctrl.getContactById);

router.post('/', validateBody(addSchema), ctrl.addContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete('/:contactId', isValidId, ctrl.removeContact);

module.exports = router;
