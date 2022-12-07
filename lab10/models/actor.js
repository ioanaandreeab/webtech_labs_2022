const sequelize = require("../sequelize");
const {DataTypes} = require("sequelize");

const Actor = sequelize.define("actor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Actor;