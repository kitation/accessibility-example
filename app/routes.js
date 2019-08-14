const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/confirmation', function(req, res) {
    res.redirect('confirmation', { 'name' : req.session.data['first-name'] });
});

router.get('confirmation', function(req, res) {
    res.render('confimation.html', {'name' : req.session.data['first-name']})
})

module.exports = router
