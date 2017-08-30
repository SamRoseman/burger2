var express = require("express");

var router = express.Router();

var Burger = require("../models/burger.js");

router.get("/", function(req, res) {
  Burger.findAll({}).then(function(results) {
    var hbsObject = {
      burgers: results
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  Burger.create({
      burger: req.body.burger,
      eaten: req.body.eaten
  }).then(function(results) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  Burger.update({
    eaten: req.body.eaten,
}, {where: {id: condition }
}).then(function(results){
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = req.params.id;

  Burger.destroy({
      where: {
          id: condition
      }
  }).then(function(results){
      res.redirect("/");
  });
});

module.exports = router;
