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

// Testing Post a new contact route

describe('Add a new contact', () => {
  it('it should POST the details of a new contact', (done) => {
    let contact = {
      "first_name": "Keith",
      "last_name": "Hibbs",
      "email": "keith.hibbs@gmail.com",
      "avatar_url": "http://www.st2299.com/data/wallpapers/65/wp-image-58065399.jpg",
      "company": "Kelloggs LLC",
      "home_phone": "123-4567",
      "mobile_phone": "234-5678",
      "work_phone": "345-6789",
      "street_address": "743 Studebaker Street ",
      "city": "Rome",
      "state": "New York",
      "zip_code": "13440",
    }
    chai.request(server)
      .post('/api/contacts')
      .send(contact)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql('Contact Created');
        done();
      })
  })
})