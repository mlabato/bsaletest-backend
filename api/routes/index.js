let express = require("express");
let router = express.Router();

const {
  getProductsController,
} = require("../controllers/getProductsController");

const {
  searchProductsController,
} = require("../controllers/searchProductsController");

const cors = require("cors");

router.use(cors());

router.get("/", getProductsController);
router.post("/search", searchProductsController);

module.exports = router;
