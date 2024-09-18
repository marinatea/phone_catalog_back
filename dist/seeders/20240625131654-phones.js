'use strict';

import { map } from '../apiData/phones.json';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  const transformedPhoneData = map((phone) => ({
    ...phone,
    capacityAvailable: phone.capacityAvailable,
    colorsAvailable: phone.colorsAvailable,
    images: phone.images,
    description: JSON.stringify(phone.description),
    cell: phone.cell,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  await queryInterface.bulkInsert('Phones', transformedPhoneData, {});
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('Phones', null, {});
}
