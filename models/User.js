// const sequelize = require('sequelize')
  
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User", {
        firstName:{
            type: DataTypes.STRING,
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
        lastName:{
            type: DataTypes.STRING,
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
        userEmail:{
            type: DataTypes.STRING,
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
        userPassword:{
            type: DataTypes.STRING,
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
        userAge:{
            type: DataTypes.INTEGER,
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
    });
    return User;
};