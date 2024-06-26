'use strict';

import { map } from '../apiData/accessories.json';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  const transformedAccessoryData = map((tablet) => ({
    ...tablet,
    capacityAvailable: tablet.capacityAvailable,
    colorsAvailable: tablet.colorsAvailable,
    images: tablet.images,
    description: JSON.stringify(tablet.description),
    cell: tablet.cell,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  await queryInterface.bulkInsert('Accessories', transformedAccessoryData, {});
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('Accessories', null, {});
}
