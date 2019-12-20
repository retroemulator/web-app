const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    key: String,
    thumbnailUrl: String,
    romUrl: String,
});

const model = mongoose.model('Game', schema);

module.exports = model;
