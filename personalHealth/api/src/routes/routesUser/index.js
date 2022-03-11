const { Router } = require('express')
const router = Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
//modelos acá:
const { User, Infopub } = require('../../db')

/**MODELS -->  USER  <--
 * documento  -> type: DataTypes.INTEGER
 * names  -> DataTypes.STRING
 * lastname  -> DataTypes.STRING
 * password  -> DataTypes.STRING
 * email  -> DataTypes.STRING
 * sex  -> DataTypes.STRING
 * adress  ->  DataTypes.STRING
 * phone  -> DataTypes.STRING
 * healthprovider  -> DataTypes.STRING
 * admin  -> DataTypes.BOOLEAN
*/

//rutas usuarios

router.post('/register', async (req, res) => { //Crear un registro de usuario
  let { documento, names, lastname, password, email, sex, adress, phone, healthprovider } = req.body;
  try {
    const newUser = await User.create({
      documento: documento,
      names: names,
      lastname: lastname,
      password: password,
      email: email,
      sex: sex,
      adress: adress,
      phone: phone,
      healthprovider: healthprovider
    })
    res.json(newUser)
  } catch (error) {
    res.send(error).status(404)
  }
})

router.post('/login', async (req, res) => { //COnfirma un login de usuario
  let { documento, password } = req.body;
  const result = await User.findOne({ where: { documento: documento, password: password } })
  if (result) {
    res.send({ message: "Wrong username/password combination!" });
  } else {
    res.send({ message: "User doesn't exist" })
  }
})

router.put('/user/:id', async (req, res) => { // Actualizar datos del usuario
  const id = req.params.id
  const { names, lastname, password, email, sex, adress, phone, healthprovider } = req.body
  try {
    const user = await User.findByPk(id)
    await user.update({
      names: names || user.dataValues.names,
      lastname: lastname || user.dataValues.lastname,
      password: password || user.dataValues.password,
      email: email || user.dataValues.email, 
      sex: sex || user.dataValues.sex,
      adress: adress || user.dataValues.adress,
      phone: phone || user.dataValues.phone,
      healthprovider: healthprovider || user.dataValues.healthprovider
    })
    if (user) {
      res.send(user).status(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    res.send(error).status(404)
  }
})


router.get('/user', async (req, res) => {//Busca un usuario por nombres
  const {names}= req.query;
  try {
    const userSearch = await User.findAll({where: {names: {[Op.like]: `%${names}%`}}})
    userSearch?res.send(userSearch).status(200):res.sendStatus(400)
} catch (error) {
    res.send(error).status(404);
}
})

router.get('/users', async (req, res) => { // Leer los usuarios que hay en la DB 
  const user = await User.findAll({include:Infopub})
  res.json(user) 
})

router.delete('/user/:id', async (req, res) => {//Elimina el registro de usuario
	const id = req.params.id
  console.log(id)
	try {
		const user = await User.destroy({
			where: { documento: id }
		})
		user === 1 ? res.send('usuario eliminado satisfactoriamente') : res.send('usuario inexistente')
	} catch (error) {
		res.send(error).status(404)
	}
})


/** MODELS -->  INFO PUBLICA  <--
 * fecha  --> DataTypes.DATEONLY,
 * blood  --> DataTypes.STRING,
 * allergies  --> DataTypes.STRING,
 * donor  --> DataTypes.STRING,
 * chronicdisease  --> DataTypes.STRING,
 * infoimportant  --> DataTypes.STRING
*/

router.post('/infopublica', async (req, res) => { //Crea una nueva info publica
  let { fecha, blood, allergies, donor, chronicdisease, infoimportant, UserDocumento  } = req.body
  console.log(req.body)
  try {
    const newInfo = await Infopub.create({
      fecha: fecha,
      blood: blood,
      allergies: allergies,
      donor: donor,
      chronicdisease: chronicdisease,
      infoimportant: infoimportant,
    }, /*{ include: [ User ] }*/
    )
    console.log(newInfo) 
    //newInfo.addUser(UserDocumento)// <--  No asocia todavia  /////////////////// 
    return res.send(newInfo)
  } catch (error) {
    res.send(error).status(404)
  }
})

router.put('/updateInfo/:id', async (req, res) =>{ // Actualiza la info publica
  const id = req.params.id
  let { fecha, blood, allergies, donor, chronicdisease, infoimportant } = req.body
  console.log(req.body)
  try {
    const info = await Infopub.findByPk(id)
    console.log(info)
    await info.update({
      fecha: fecha || info.dataValues.fecha,
      blood: blood || info.dataValues.blood,
      allergies: allergies || info.dataValues.allergies,
      donor: donor || info.dataValues.donor,
      chronicdisease: chronicdisease || info.dataValues.chronicdisease,
      infoimportant: infoimportant || info.dataValues.infoimportant
    })
    if (info) {
      res.send(info).status(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    res.send(error).status(404)
  }  
})

router.get('/info', async (req, res) => { // Leer la info publica en la DB 
  const infopublica = await Infopub.findAll({include:User})
  res.json(infopublica) 
})

router.post('/info/:id', async (req, res) => {
  const id = req.params.id
  const docId = req.body.documento
  console.log('id:', id, 'doc:', docId)
  try {
    const user = await User.findByPk(docId)
    const info = await Infopub.findByPk(id)
    user.addInfopub(info)
    res.send(info)
  } catch (error) {
    res.send(error).status(404);
  }
})


module.exports = router