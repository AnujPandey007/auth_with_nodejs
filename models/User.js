// Include Sequelize module
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
        age:{
            type: DataTypes.INTEGER,
            allowNULL: false,
            validate: {
                notEmpty: true
            }
        },
    });
    return User;
};