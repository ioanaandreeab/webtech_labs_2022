const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const Recipe = sequelize.define("recipe", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prepTime: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            max: 200
        }
    },
    difficulty: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['beginner', 'advanced']
    }
});

module.exports = Recipe;