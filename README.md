# Contacts Manager API
> Node, Express, PostreSQL RESTful API

Manage the details of your contacts.View, add, update and delete your contacts details such as name, phone numbers and location.

## Developing

### Built With

* Node v6.10.0
* Express v4.15.3
* PostgreSQL v9.6
* Sequelize v4.2.1 as ORM

### Prerequisites

[Node](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/)

### Setting up Dev

```shell
Download or clone the repostisory
git clone https://github.com/Pierre-D-G/Contacts-API.git
cd Contacts API/
Run npm install to install dependancies
```
Run `npm run dev` to run the development server
> runs `nodemon` to automatically restart the server when a change is made

Create a file named `config.js` in the root of the project folder with the structure:

```shell
  module.exports = {
  database: //'named of development database',
  username: //'database login username',
  password: //'database login password'
}
```
## Tests

Run `npm test` to execute unit tests via Mocha and Chai
> Tests the API endpoints to make sure the correct responses are being sent when requests are made

### Example 

Testing Get all contacts
> GET /api/contacts -  retrieves all contacts

```shell
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
});
```

## Api Reference

* GET - `/api/contacts` - view all your contacts and a few details about them
* GET - `/api/contacts/:id` - view all the details about a contact 
* POST - `/api/contacts` - Create a new contact
* PUT - `/api/contacts/:id` - Update a contact's details
* DELETE - `/api/contacts/:id` - Delete a contact

## Development Path

* Create Routes
  - Get - ~~`/api/contacts` - view all your contacts and a few details about them~~
  - Get - ~~`/api/contacts/:id` - view all the details about a contact~~ 
  - Post - ~~`/api/contacts` - Create a new contact~~
  - Put - ~~`/api/contacts/:id` - Update a contact's details~~
  - Delete - ~~`/api/contacts/:id` - Delete a contact~~



* Create Route Tests
  - ~~Get - `/api/contacts` - view all your contacts and a few details about them~~
  - ~~Get - `/api/contacts/:id` - view all the details about a contact~~
  - ~~Post - `/api/contacts` - Create a new contact~~
  - ~~Put - `/api/contacts/:id` - Update a contact's details~~
  - ~~Delete - `/api/contacts/:id` - Delete a contact~~

## Licensing

MIT