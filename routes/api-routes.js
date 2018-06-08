// Import the model recipe.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

  app.get("/", function(req, res) {

    db.sequelizeModel.findAll({}).then(function(result) {
      var hbsObject = {
        recipes: result
      };
      if (hbsObject.recipes.length > 0) {
        console.log(hbsObject.recipes)
      }
      res.render("index", hbsObject)
    })
  });

  app.post("/api/recipes", function(req, res) {

    db.sequelizeModel.create({
      "name": req.body.name,
      "url": req.body.url,
      "breakfast": req.body.breakfast,
      "mains": req.body.mains,
      "dessert": req.body.dessert,
      "other": req.body.other
    }).then(function(result) {
      res.json({id: result.insertId})
    })
  });


  app.put("/api/recipes/:id", function(req, res) {

    console.log(req.body);

    var idUpdate = req.params.id;

    if (req.body.tried) {
      db.sequelizeModel.update({
        tried: req.body.tried
      },
      {
        where: {
          id: idUpdate
        }
      }).then(function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    }

    else if (req.body.scored) {

      db.sequelizeModel.update({
        scored: req.body.scored,
        score: req.body.score
      }, {
        where: {
          id: idUpdate
        }
      }).then(function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } 
        else {
          res.status(200).end();
        }
      });
    }
  });

  app.delete("/api/recipes/:id", function(req, res) {
    var deleteId = req.params.id;

    db.sequelizeModel.destroy({
      where: {
        id: deleteId
      }
    }).then(function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

}

