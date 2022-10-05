const router = require('express').Router();
const { Artist } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try { 
    res.render('homepage', {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/artist', async (req, res) => {
  try {
    const artistData = await Artist.findAll({})
   const artists = artistData.map((artist) => artist.get({plain: true})
   ) 
   console.log(artists)
    res.render('artist', {
      artists,
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(419).json(err);
  }
});

router.get('/album', async (req, res) => {
  try {
    res.render('album', {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/song', async (req, res) => {
  try {
    res.render('song', {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
