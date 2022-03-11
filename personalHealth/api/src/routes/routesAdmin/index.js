const { Router } = require('express')
const router = Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
//modelos acá:
const { Entidad, User, Infopub, Infopriv } = require('../../db')

/** MODELO  -->  ENTIDAD  <--
 * id  --> DataTypes.INTEGER,
 * name  --> DataTypes.STRING,
 * adress  --> DataTypes.STRING
 * professional  --> DataTypes.STRING,
 * matric  -->  DataTypes.STRING,
 * specialties  --> DataTypes.STRING,
 */

//rutas admin

router.post('/entidad', async (req, res) => { // Crea un nuevo registro de entidad
  let { name, adress, professional, matric, specialties } = req.body
  try {
    const newEntidad = await Entidad.create({
      name: name,
      adress: adress,
      professional: professional,
      matric: matric,
      pecialties: specialties
    })
    res.json(newEntidad)
  } catch (error) {
    res.send(error).status(404)
  }
})

router.put('/entidad/:id', async (req, res) => { // Actualizar datos de la entidad
  const id = req.params.id
  let { name, adress, professional, matric, specialties } = req.body
  try {
    const entidad = await Entidad.findByPk(id)
    console.log(entidad)
    await entidad.update({
      name: name || entidad.dataValues.name,
      adress: adress || entidad.dataValues.adress,
      professional: professional || entidad.dataValues.professional,
      matric: matric || entidad.dataValues.matric,
      specialties: specialties || entidad.dataValues.specialties,
    })
    if (entidad) {
      res.send(entidad).status(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    res.send(error).status(404)
  }
})


router.get('/entidad/', async (req, res) => {//Busca un usuario por nombres
  const { name } = req.query;
  try {
    const entidadSearch = await Entidad.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
    entidadSearch ? res.send(entidadSearch).status(200) : res.sendStatus(400)
  } catch (error) {
    res.send(error).status(404);
  }
})

router.get('/entidades', async (req, res) => { // Leer las Entidades que hay en la DB 
  const entidades = await Entidad.findAll({}) // include:Infopriv
  res.json(entidades) 
})

router.delete('/entidad/:id', async (req, res) => {//Elimina el registro de usuario
	const id = req.params.id
  console.log(id)
	try {
		const entidad = await Entidad.destroy({
			where: { id: id }
		})
		entidad === 1 ? res.send('usuario eliminado satisfactoriamente') : res.send('usuario inexistente')
	} catch (error) {
		res.send(error).status(404)
	}
})
  
/** MODELO  -->  INFO PRIVADA  <--
 * fecha  --> DataTypes.DATEONLY,
 * disease  --> DataTypes.STRING,
 * historyclinic  --> DataTypes.STRING,
 * parentezco  --> DataTypes.STRING,
 * infoimportant  --> DataTypes.STRING,
 */
router.post('/infoprivada', async (req, res) => {
  let { fecha, disease, historyclinic, parentezco, infoimportant, UserDocumento } = req.body
  console.log(req.body)
  try {
    const newInfoPriv = await Infopriv.create({
      fecha: fecha,
      disease: disease,
      historyclinic: historyclinic,
      parentezco: parentezco,
      infoimportant: infoimportant
    })
    //newInfoPriv.addUser(UserDocumento)
    res.send(newInfoPriv)
  } catch (error) {
    res.send(error).status(404)
  }
})

router.put('/updateInfo/:id', async (req, res) =>{ // Actualiza la info publica
  const id = req.params.id
  let { fecha, disease, historyclinic, parentezco, infoimportant, UserDocumento } = req.body
  console.log(req.body)
  try {
    const infoPrivate = await Infopriv.findByPk(id)
    console.log(infoPrivate)
    await infoPrivate.update({
      fecha: fecha || info.dataValues.fecha,
      disease: disease || info.dataValues.disease,
      historyclinic: historyclinic || info.dataValues.historyclinic,
      parentezco: parentezco || info.dataValues.parentezco,
      infoimportant: infoimportant || info.dataValues.infoimportant
    })
    if (infoPrivate) {
      res.send(infoPrivate).status(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    res.send(error).status(404)
  }  
})

router.get('/infoprivada', async (req, res) => { // Leer toda la info privada en la DB 
  const infoPrivate = await Infopriv.findAll({include:User})
  res.json(infoPrivate) 
})


module.exports = router