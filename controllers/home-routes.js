const router = require('express').Router();
const { Gallery, Painting } = require('../models');

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
    res.render('artist', {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
