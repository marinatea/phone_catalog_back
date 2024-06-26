'use strict';

const phoneData = require('../apiData/phones.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transformedPhoneData = phoneData.map(phone => ({
      ...phone,
      capacityAvailable: phone.capacityAvailable,
      colorsAvailable: phone.colorsAvailable,
      images: phone.images,
      description: JSON.stringify(phone.description),
      cell: phone.cell,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Phones', transformedPhoneData, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Phones', null, {});
  }
};