const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const Studio = sequelize.define("studio", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Studio;