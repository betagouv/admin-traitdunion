module.exports = (sequelize, DataTypes) => {
  const Candidature = sequelize.define(
    'candidature',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      offreId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      candidatId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    },
    {
      freezeTableName: true,
      tableName: 'candidatures'
    }
  )

  Candidature.associate = (models) => {
    console.log(models)
    const { candidature, offres, candidats } = models
    offres.belongsToMany(candidats, {
      through: { model: candidature }
    })
    candidats.belongsToMany(offres, { through: { model: candidature } })
    offres.candidatures = candidats.hasMany(candidature)
    candidature.belongsTo(offres)
    candidature.belongsTo(candidats)
  }

  return Candidature
}
