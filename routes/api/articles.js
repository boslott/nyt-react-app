const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const { catchErrors } = require('../../handlers/errorHandlers');

// Matches with "/api/articles"
router.route("/")
  .get(catchErrors(articleController.findAll))
  .post(articleController.create);

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(catchErrors(articleController.findById))
  .delete(catchErrors(articleController.remove));

module.exports = router;
