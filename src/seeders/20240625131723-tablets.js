'use strict';

const tabletData = require('../apiData/tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transformedTabletData = tabletData.map(tablet => ({
      ...tablet,
      capacityAvailable: tablet.capacityAvailable,
      colorsAvailable: tablet.colorsAvailable,
      images: tablet.images,
      description: JSON.stringify(tablet.description),
      cell: tablet.cell,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Tablets', transformedTabletData, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Tablets', null, {});
  }
};