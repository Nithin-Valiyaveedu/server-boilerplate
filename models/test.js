const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Test = sequelize.define(
    'Test',
    {
      test: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'Test',
    }
  );
  sequelize.sync({ alter: true });
};
