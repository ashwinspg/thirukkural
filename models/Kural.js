const mongoose = require('mongoose');

const { Schema } = mongoose;

const kuralSchema = new Schema({
    Number: Number,
    Line1: String,
    Line2: String,
    Translation: String,
    mv: String,
    sp: String,
    mk: String,
    explanation: String,
    couplet: String,
    transliteration1: String,
    transliteration2: String,
    paal: String,
    iyal: String,
    agaradhi: String,
    amma: String
});

mongoose.model('kurals', kuralSchema);