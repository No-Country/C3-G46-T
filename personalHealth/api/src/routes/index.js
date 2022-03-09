const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesAdmin = require('./routesAdmin/index.js')
const routesUser = require('./routesUser/index.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/admin', routesAdmin)
router.use('/', routesUser)


module.exports = router;
