module.exports = (sequelize, DataTypes) => {
  const Metiers = sequelize.define(
    'metiers',
    {
      codeROME: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      categorie: {
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
      tableName: 'Metiers'
    }
  )

  Metiers.associate = ({offres}) => {
    Metiers.hasMany(offres, {foreignKey: 'codeROME'})
  }

  return Metiers
}
