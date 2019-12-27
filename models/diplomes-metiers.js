module.exports = (sequelize, DataTypes) => {
  const DiplomesMetiers = sequelize.define('diplomes-metiers',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      codeROME: {
        type: DataTypes.STRING,
        allowNull: false
      },
      codeDiplome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    },
    {
      freezeTableName: true,
      tableName: 'diplomes-metiers'
    }
  )

  DiplomesMetiers.associate = (models) => {
    const { diplomes, metiers} = models
    diplomes.belongsToMany(metiers, {
      through: {model: DiplomesMetiers},
      foreignKey: 'codeDiplome'
    })
    metiers.belongsToMany(diplomes, {
      through: {model: DiplomesMetiers},
      foreignKey: 'codeROME'
    })
  }

  return DiplomesMetiers
}
