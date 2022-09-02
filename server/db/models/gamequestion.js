const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GameQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Game, { foreignKey: 'game_id' });
      this.belongsTo(models.Question, { foreignKey: 'question_id' });
    }
  }
  GameQuestion.init({
    game_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    stat: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'GameQuestion',
  });
  return GameQuestion;
};
