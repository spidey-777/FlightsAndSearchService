'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
       modelNumber: 'boeing 777',
       capacity: 230,
       createdAt: new Date(),
       updatedAt: new Date()
       },

       {
        modelNumber: 'Airbus A320',
        capacity: 250,
        createdAt: new Date(),
       updatedAt: new Date()
       },
       {
          modelNumber: 'boeing 737',
          capacity: 230,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            modelNumber: 'boeing 747',
            capacity: 230,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
         modelNumber: 'Airbus A330',
         capacity: 150,
         createdAt: new Date(),
         updatedAt: new Date()
        
        },
        
      
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
