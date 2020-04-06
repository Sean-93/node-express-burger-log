const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.all(function(data) {
      const json = JSON.stringify(data);
      const burgers = JSON.parse(json);
      const devouredBurgers = burgers.filter(function(burger) {
        return burger.devoured === 1
      })
      const uneatenBurgers = burgers.filter(function(burger) {
        return burger.devoured === 0
      })
      console.log(JSON.parse(json));
      var hbsObject = {
        devouredBurgers,
        uneatenBurgers,
        titleLeft: "burgers to be eaten",
        titleCenter: "eat the burgah!",
        titleRight: "devoured burgers" ,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, 0
    ], function(result) {
      // Send back the ID of the new burgers
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "ID = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "ID = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  