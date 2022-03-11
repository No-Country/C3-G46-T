const { DataTypes, Model } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
class User extends Model {}

module.exports = (sequelize) => {
  return User.init({
    documento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.STRING,
    },
    adress: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    healthprovider: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      default: false
    },
}, { sequelize, tableName: 'user' });
}