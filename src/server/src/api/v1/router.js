const axios = require('axios');
const express = require('express');
const Consoles = require('@retroemulator/core/src/enums/consoles');
const { generateError, Errors } = require('@retroemulator/core/src/errors');
const firestore = require('../../firestore');

const router = express.Router();

/**
 * GET /console
 *
 * Gets listing of all available consoles.
 */
router.get('/console', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const doc = await firestore.collection('resources').doc('v1').get();
  if (!doc.exists) {
    return res.status(400).send(generateError(
      Errors.WebApp.CONSOLES_LISTING_NOT_EXIST.code,
      Errors.WebApp.CONSOLES_LISTING_NOT_EXIST.message,
    ));
  }
  return res.status(200).send({ data: doc.data() });
});

/**
 * POST /create-session
 *
 * @param consoleId
 *
 * Makes a request to SessionService to create a new session.
 */
router.post('/create-session', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { consoleId } = req.body;
  if (consoleId === undefined || !Consoles.get(consoleId)) {
    return res.status(400).send(generateError(
      Errors.Generic.INVALID_CONSOLE_ID.code,
      Errors.Generic.INVALID_CONSOLE_ID.message,
    ));
  }

  const url = `${process.env.SESSION_SERVICE_URL}/create-session`;

  try {
    const result = await axios.post(url, req.body);
    console.log(result.data); // remove this later
    return res.status(200).send({ data: result.data });
  } catch (error) {
    return res.status(400).send(error.response.data);
  }
});

router.post('/join-session', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  return res.status(200).send();
});

module.exports = router;
