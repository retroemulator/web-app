const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const Game = require('./model/Game');

const PORT = process.env.PORT || 5001;

const app = express();

const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
};

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    mongoose.connect('mongodb+srv://admin:admin@game-emulator-vosv9.mongodb.net/games', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', () => {
        console.log('Connection error');
    });
    db.once('open', () => {
        console.log('Connection opened');
    });
});

const CONSOLE_KEY_MAPPING = {
    gba: 1,
    nes: 2,
    snes: 3,
    n64: 4,
};

app.get('/games/:consoleKey', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const {consoleKey} = req.params;

    if (consoleKey === undefined || CONSOLE_KEY_MAPPING[consoleKey] === undefined) {
        return res.status(400).send({
            error: {
                reason: `Error: Invalid consoleKey ${consoleKey}`,
            },
        });
    }

    Game.find({ key: consoleKey }, (err, data) => {
        if (err) {
            return res.status(400).send({
                error: {
                    reason: `Error: Unable to fetch games with consoleKey ${consoleKey}.`,
                    message: err,
                },
            });
        }

        res.status(200).send({ data });
    });
});
