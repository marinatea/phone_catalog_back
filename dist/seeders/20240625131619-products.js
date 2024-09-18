'use strict';

import { map } from '../apiData/products.json';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  const transformedProductData = map((product) => ({
    ...product,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  await queryInterface.bulkInsert('Products', transformedProductData);
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete('Products', null, {});
}
