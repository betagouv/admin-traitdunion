module.exports = (sequelize, DataTypes) => {
  const Candidature = sequelize.define(
    'candidature',
    {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      offreId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      candidatId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    },
    {
      freezeTableName: true,
      tableName: 'candidatures'
    }
  )

  Candidature.associate = ({ Candidature, Offre, Candidat }) => {
    Offre.Candidats = Offre.belongsToMany(Candidat, {
      through: { model: Candidature }
    })
    Candidat.belongsToMany(Offre, { through: { model: Candidature } })
    Offre.Candidatures = Candidat.hasMany(Candidature)
    Candidature.belongsTo(Offre)
    Candidature.belongsTo(Candidat)
  }

  return Candidature
}
