const niveauxEtude = [
  'sans-diplome',
  'cap-bep',
  'bac-0-1',
  'bac-2',
  'bac-3-4',
  'bac-5'
]

module.exports = (sequelize, DataTypes) => {
  const Diplomes = sequelize.define(
    'diplomes',
    {
      codeDiplome: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      intitule: {
        type: DataTypes.STRING,
        allowNull: false
      },
      niveauEtudeEntree: {
        type: DataTypes.ENUM(niveauxEtude),
        allowNull: false,
        validate: {isIn: [niveauxEtude]}
      },
      commune: {
        type: DataTypes.STRING,
        allowNull: true
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
      tableName: 'diplomes'
    }
  )

  return Diplomes
}
