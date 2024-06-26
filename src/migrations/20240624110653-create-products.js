'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    itemId: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    fullPrice: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    screen: {
      type: Sequelize.STRING,
    },
    capacity: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    ram: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
export async function down(queryInterface) {
  await queryInterface.dropTable('Products');
}
