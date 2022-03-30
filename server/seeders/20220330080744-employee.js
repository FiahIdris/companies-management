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
      "employees",
      [
        {
          name: "Nurfiah Idris",
          email: "nurfiahidris@mail.com",
          phone_number: "085238434433",
          job_title: "manager",
          company_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zulfiah Idris",
          email: "nurfiahidris@mail.com",
          phone_number: "085238434433",
          job_title: "director",
          company_id: 3,
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
    await queryInterface.bulkDelete("employees", null, {});
  },
};
