'use strict';

const accessoryData = require('../apiData/accessories.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transformedAccessoryData = accessoryData.map(tablet => ({
      ...tablet,
      capacityAvailable: tablet.capacityAvailable,
      colorsAvailable: tablet.colorsAvailable,
      images: tablet.images,
      description: JSON.stringify(tablet.description),
      cell: tablet.cell,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Accessories', transformedAccessoryData, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Accessories', null, {});
  }
};