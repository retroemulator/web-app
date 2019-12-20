// TODO: document REST API with Swagger
const express = require('express');
const firestore = require('../../firestore');
const { generateError, Errors } = require('@retroemulator/core/src/errors');

const router = express.Router();

/**
 * GET /console
 *
 * Gets listing of all available consoles.
 */
router.get('/console', async (req, res) => {
  res.setHeader('ContentType', 'application/json');
  const doc = await firestore.collection('resources').doc('v1').get();
  if (!doc.exists) {
    return res.status(400).send(generateError(
      Errors.WebApp.CONSOLES_LISTING_NOT_EXIST.code,
      Errors.WebApp.CONSOLES_LISTING_NOT_EXIST.message,
    ));
  }

  res.status(200).send({ data: doc.data() });
});

module.exports = router;
