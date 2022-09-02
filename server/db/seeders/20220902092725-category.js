module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Автомобили',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кофе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Книги',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Компьютерные игры',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
