module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Candidats = sequelize.define('candidats', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    niveauEtude: {
      type: DataTypes.ENUM(
        'bac',
      ),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('2019-11-14 13:49:20.379+00'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('2019-11-14 13:49:20.379+00'),
    },
  }, {
    tableName: 'candidats',
  });

  Candidats.associate = (models) => {
  };

  return Candidats;
};

