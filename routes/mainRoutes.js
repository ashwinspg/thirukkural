const mongoose = require('mongoose');

const Kural = mongoose.model('kurals');

module.exports = app => {
    app.get('/searchKural/:kuralNumber', async (req, res) => {
        const kuralNumber = req.params.kuralNumber;
        const kural = await Kural.findOne({ Number: kuralNumber }, {_id: 0});
        res.send(kural);
    });

    app.patch('/updateKural/:kuralNumber', async (req, res) => {
        const kuralNumber = req.params.kuralNumber;
        const { amma } = req.body;
        const kural = await Kural.findOneAndUpdate({ Number: kuralNumber }, {
            amma
        },{ new: true });
        res.send(kural);
    });
};