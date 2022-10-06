const router = require('express').Router();
const { Artist } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbArtistData = await Artist.create({
            name: req.body.name,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbArtistData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;