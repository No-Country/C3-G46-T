const server = require('./src/app.js');
const { conn } = require('./src/db.js')
const { entidadesDB} = require('./src/entidadesDB')
// Syncing all the models at once.

conn.sync({force: true}).then(() => {
  server.listen(3001, () => {
    entidadesDB()
    console.log('%s listening at port 3001'); // eslint-disable-line no-console
  });
});

