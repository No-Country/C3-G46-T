const { Entidad } = require('./db.js');

let database = [
  {
    name: 'San Marcos',
    adress: 'San Jose 390, Jujuy',
    professional: 'Marcos',
    matric: 4225,
    specialties: 'clinica medica',
  },
  {
    name: 'Santa Maria',
    adress: 'Peatonal 5, San Juan',
    professional: 'Mariana',
    matric: 3065,
    specialties: 'Odontologia',
  },
  {
    name: 'Santa Leticia',
    adress: 'Belgrano 19, Mendoza',
    professional: 'Leticia',
    matric: 7028,
    specialties: 'Dermatologa',
  },
  {
    name: 'Clinica Federico',
    adress: 'Portugal 10, Buenos Aires',
    professional: 'Federico',
    matric: 1030,
    specialties: 'Dermatologa',
  },
];

async function entidadesDB (){
  try {  
    await database.map (element => {
      Entidad.create({
       
          name: element.name,
          adress: element.adress,
          professional: element.professional,
          matric: element.matric,
          specialties: element.specialties,
        
      });
    });
    console.log('La Base de Datos se cargo correctamente');

  } catch (err) {
    console.log(err);
  }
};
    
module.exports = {
  entidadesDB,
  database
};