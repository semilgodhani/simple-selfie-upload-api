const { Sequelize } = require("sequelize");
const  userModel = require("./model/users");
const {pool}= require ("pg")



module.exports = async () => {
    const sequelize = new Sequelize({
        host: 'localhost',
        dialect: 'postgres',
        username: 'postgres',
        port: 5432,
        password: "semil##232499"
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        user = userModel(sequelize);
        await sequelize.sync();
        console.log("table create successfullly ")
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return sequelize
};  