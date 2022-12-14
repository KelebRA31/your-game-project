module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GameQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      stat: {
        type: Sequelize.BOOLEAN,
        onDelete: 'cascade',
        allowNull: null,
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GameQuestions');
  },
};
