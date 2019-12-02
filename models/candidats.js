const niveauxEtude = [
  'sans-diplome',
  'cap-bep',
  'bac-0-1',
  'bac-2',
  'bac-3-4',
  'bac-5'
]

module.exports = (sequelize, DataTypes) => {
  const {Sequelize} = sequelize
  const Candidats = sequelize.define('candidatures', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    },
    niveauEtude: {
      type: Sequelize.ENUM(niveauxEtude),
      validate: { isIn: niveauxEtude },
      allowNull: true
    },
    zipCode: {
      type: Sequelize.STRING,
      allowNull: true
    },
    poleEmploiId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    otherJobs: {
      type: Sequelize.STRING,
      allowNull: true
    },
    acceptFollowingTraining: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'candidatures'
  })

  Candidats.associate = (models) => {
  }

  return Candidats
}

