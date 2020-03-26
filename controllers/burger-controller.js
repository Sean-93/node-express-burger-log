const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const json = {
        titleLeft: "burgers to be eaten",
        titleCenter: "eat the burgah!",
        titleRight: "devoured burgers" ,
    }
    res.render('index', json)
    // res.send('index', )
})

module.exports = router;

