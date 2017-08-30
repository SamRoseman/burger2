var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
    burger: Sequelize.STRING,
    eaten: Sequelize.BOOLEAN
    },{
    timestamps: false
});

Burger.sync();

module.exports = Burger;
