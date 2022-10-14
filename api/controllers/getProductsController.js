const db = require("../../database/models");

const getProductsController = (req, res) => {
  db.Product.findAll()
    .then((products) => {
      function compareCategoryId(a, b) {
        return a.category - b.category;
      }
      const orderedProducts = products.sort(compareCategoryId);

      res.status(201).json({
        orderedProducts,
      });
    })
    .catch((errors) => console.log(errors));
};

module.exports = { getProductsController };
