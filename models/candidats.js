const niveauxEtude = [
  'sans-diplome',
  'cap-bep',
  'bac-0-1',
  'bac-2',
  'bac-3-4',
  'bac-5'
]

module.exports = (sequelize, DataTypes) => {
  const Candidats = sequelize.define(
    'candidats',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      niveauEtude: {
        type: DataTypes.ENUM(niveauxEtude),
        validate: { isIn: [niveauxEtude] },
        allowNull: true
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      poleEmploiId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      otherJobs: {
        type: DataTypes.STRING,
        allowNull: true
      },
      acceptFollowingTraining: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activationKey: {
        type: DataTypes.STRING,
        allowNull: true
      },
      resetPasswordKey: {
        type: DataTypes.STRING,
        allowNull: true
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      deStatus: {
        type: DataTypes.ENUM(deStatuses),
        validate: { isIn: [deStatuses] },
        allowNull: true
      }
    },
    {
      tableName: 'candidats'
    }
  )

  Candidats.associate = (models) => {}

  return Candidats
}
