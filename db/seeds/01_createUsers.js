const faker = require('faker');

// const createFakeUser = () => {
// const userType =
// faker.random.number({
//   min: 1,
//   max: 2
// }) === 1
//   ? true
//   : false;

// const propertyId =
//   userType === "admin"
//     ? null
//     : faker.random.number({
//         min: 1,
//         max: 50
//       });

// return {
//     first_name: faker.name.firstName(),
//     last_name: faker.name.lastName(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     mobile: faker.phone.phoneNumber(),
//     password: faker.internet.password(),
//     home_address:
//       faker.address.streetAddress() +
//       faker.address.city() +
//       faker.address.country(),
//     is_admin: false
//   };
// };

// exports.seed = async function(knex, Promise) {
//   const fakeUsers = [];
//   const totalFakeUsers = 10;

//   for (let i = 0; i < totalFakeUsers; i++) {
//     fakeUsers.push(createFakeUser());
//   }
//   await knex("users").insert(fakeUsers);
// };

exports.seed = function(knex, Promise) {
  return knex('users')
    .del() // delete existing posts
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: true,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: true,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: true,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          mobile: faker.phone.phoneNumber(),
          password: faker.internet.password(),
          home_address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
          is_admin: false,
        },
      ]);
    });
};