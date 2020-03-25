const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const json = {
        titleLeft: "burgers to be eaten",
        titleCenter: "eat the burgah!",
        titleRight: "devoured burgers" , 
        timing: [
            {
              monday: "9:00 - 15:00",
              tuesday: "10 - 13:00"
            }
          ,
              {
              monday: "10:00 - 15:00",
              tuesday: "11 - 19:00"
            },
           {
              monday: "9:00 - 10:00",
              tuesday: "10 - 21:00"
            }
          ]
    }
    res.render('index', json)
    // res.send('index', )
})

module.exports = router;

