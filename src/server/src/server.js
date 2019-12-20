const bodyParser = require('body-parser');
const express = require('express');
const cors = require('@retroemulator/core/src/middleware/cors');

const apiV1Router = require('./api/v1');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use('/api/v1', apiV1Router);
