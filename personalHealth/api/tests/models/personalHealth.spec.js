const { PersonalHealth, conn } = require('../../src/db.js');
const { expect } = require('chai');

/* describe('PersonalHealth model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => PersonalHealth.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        PersonalHealth.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        PersonalHealth.create({ name: 'Marcos' });
      });
    });
  });
});
*/