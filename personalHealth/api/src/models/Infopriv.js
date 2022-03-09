const { DataTypes, Model } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
class Infopriv extends Model {}

module.exports = (sequelize) => {
    return Infopriv.init({
        fecha: {
            type: DataTypes.STRING,
        },
        disease: {
            type: DataTypes.STRING,
        },
        historyclinic: {
            type: DataTypes.STRING,
        },
        parentezco: {
            type: DataTypes.STRING,
        },
        infoimportant: {
            type: DataTypes.STRING,
        },
    }, { sequelize, tableName: 'infopriv' });
    }
