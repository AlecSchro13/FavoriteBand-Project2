const router = require('express').Router();

const { Artist } = require('../../models');

router.post('/', async (req, res) => {
    console.log("hello world!")
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
        res.status(420).json(err);
    }
});

router.get('/dylan', async (req, res) => {
    console.log("hey im walking here")
    
});
module.exports = router;