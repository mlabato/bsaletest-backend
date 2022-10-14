const db = require("../../database/models");
const Sequelize = require("Sequelize");
const Op = db.Sequelize.Op;

const searchProductsController = (req, res) => {
  const search = req.body.userSearch;

  db.Product.findAll({
    where: {
      name: { [Op.like]: `%${search}%` },
    },
  })
    .then((searchedProducts) => {
      
      return res.status(201).json({
        searchedProducts,
      });
    })
    .catch((errors) => console.log(errors));
};

module.exports = { searchProductsController };
