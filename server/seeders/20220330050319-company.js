"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "companies",
      [
        {
          company_name: "Fast8",
          telephone_number: "082343243",
          is_active: false,
          address: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          company_name: "Inovamap",
          telephone_number: "082344453243",
          is_active: true,
          address: "Bandung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("companies", null, {});
  },
};
