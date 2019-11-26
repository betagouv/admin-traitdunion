module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Offres = sequelize.define('offres', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    jobTitle: {
      type: DataTypes.STRING,
    },
    jobDescription: {
      type: DataTypes.STRING,
    },
    jobAdditionalInfo: {
      type: DataTypes.STRING,
    },
    codeRome: {
      type: DataTypes.STRING,
      field: 'codeROME',
    },
    status: {
      type: DataTypes.ENUM(
        'draft',
        'published',
        'fulfilled',
        'canceled',
      ),
    },
    imgURL: {
      type: DataTypes.STRING,
    },
    contractType: {
      type: DataTypes.ENUM(
        'cdi',
        'cdd-court',
        'cdd-long',
        'autre',
      ),
    },
    salary: {
      type: DataTypes.STRING,
    },
    jobDuration: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    pmsmpDuration: {
      type: DataTypes.STRING,
    },
    pmsmpDate: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('2019-11-14 13:55:26.256+00'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('2019-11-14 13:55:26.256+00'),
    },
  }, {
    tableName: 'offres',
  });

  Offres.associate = (models) => {
  };

  return Offres;
};

