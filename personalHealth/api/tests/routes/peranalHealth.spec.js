/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { PersonalHealth, conn } = require('../../src/db.js');

const agent = session(app);
const user = {
  name: 'Marian',
};

/* describe('PersonalHealth routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => PersonalHealth.sync({ force: true })
    .then(() => PersonalHealth.create(personalHealth)));
  describe('GET /home', () => {
    it('should get 200', () =>
      agent.get('/home').expect(200)
    );
  });
});
*/