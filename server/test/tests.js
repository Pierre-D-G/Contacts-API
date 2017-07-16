let config = require('../../config');
let Sequelize = require('sequelize');

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

let Contact = sequelize.import(__dirname + "/models/contact.js");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server')
let should = chai.should();

chai.use(chaiHttp);

// Testing GET all contacts route
describe('Get all contacts', () => {
    it('it should GET all contacts', (done) => {
        chai.request(server)
            .get('/api/contacts')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })
})