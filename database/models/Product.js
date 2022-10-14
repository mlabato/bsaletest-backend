module.exports = (sequelize, dataTypes) => {

    const alias = "Product";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER,
        },
        url_image: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "product", //nombre de tabla en dbeaver
        timestamps: false,
    };
    
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo (models.Category, { //alias que le dimos a la tabla en el modelo
            as: "Category",
            foreignKey: "category"
        });

    };
    
    return Product;
};