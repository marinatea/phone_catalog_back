'use strict';

import { map } from '../apiData/tablets.json';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  const transformedTabletData = map((tablet) => ({
    ...tablet,
    capacityAvailable: tablet.capacityAvailable,
    colorsAvailable: tablet.colorsAvailable,
    images: tablet.images,
    description: JSON.stringify(tablet.description),
    cell: tablet.cell,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  await queryInterface.bulkInsert('Tablets', transformedTabletData, {});
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('Tablets', null, {});
}
