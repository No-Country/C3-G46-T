const { DataTypes, Model } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
class Entidad extends Model {}

module.exports = (sequelize) => {
  return Entidad.init({
    id:{
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
      },
    name: {
      type: DataTypes.STRING,
    },
    adress: {
      type: DataTypes.STRING,
    },
    professional: {
      type: DataTypes.STRING,
    },
    matric: {
      type: DataTypes.STRING,
    },
    specialties: {
      type: DataTypes.STRING,
    },
}, { sequelize, tableName: 'entidad' });
}
