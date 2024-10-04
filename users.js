const { sequelize, DataTypes } = require("sequelize");


const userModel = (sequelize) => {
    const { datatype } = sequelize;

    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.TEXT
        },

        lastName: {
            type: DataTypes.TEXT,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        city: { type: DataTypes.CHAR },

        data: {
            type: DataTypes.JSONB
        }
    });
};

module.exports = userModel 