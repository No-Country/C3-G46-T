const { DataTypes, Model } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
class Infopub extends Model {}

module.exports = (sequelize) => {
    return Infopub.init({
    fecha: {
        type: DataTypes.DATEONLY,
    },
    blood: {
        type: DataTypes.STRING,
    },
    allergies: {
        type: DataTypes.STRING,
    },
    donor: {
        type: DataTypes.STRING,
    },
    chronicdisease: {
        type: DataTypes.STRING,
    },
    infoimportant: {
        type: DataTypes.STRING,
    },
}, { sequelize, tableName: 'infopub', timestamps: false });
}