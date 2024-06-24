'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accessories', {
      id: {
        type: Sequelize.STRING(1024),
        primaryKey: true,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING
      },
      namespaceId: {
        type: Sequelize.STRING(1024)
      },
      name: {
        type: Sequelize.STRING(1024)
      },
      capacityAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING(1024))
      },
      capacity: {
        type: Sequelize.STRING(1024)
      },
      priceRegular: {
        type: Sequelize.INTEGER
      },
      priceDiscount: {
        type: Sequelize.INTEGER
      },
      colorsAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING(1024))
      },
      color: {
        type: Sequelize.STRING(1024)
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      description: {
        type: Sequelize.JSON
      },
      screen: {
        type: Sequelize.STRING(1024)
      },
      processor: {
        type: Sequelize.STRING(1024)
      },
      resolution: {
        type: Sequelize.STRING(1024)
      },
      ram: {
        type: Sequelize.STRING(1024)
      },
      camera: {
        type: Sequelize.STRING(1024)
      },
      zoom: {
        type: Sequelize.STRING(1024)
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING(1024))
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Accessories');
  }
};