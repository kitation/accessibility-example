const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/confirmation', function(req, res) {
    res.redirect('confirmation')
});


router.get('confirmation', function(req, res) {
    res.render('confimation.html')
})

router.get('working', function(req, res) {
  res.render('working');
})

router.get('form', function(req, res) {
  res.render('form');
})

module.exports = router
