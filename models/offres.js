const request = require('request-promise-native')

module.exports = (sequelize, DataTypes) => {
  const {Sequelize} = sequelize
  const Offres = sequelize.define('offres', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    companyName: {
      type: DataTypes.STRING
    },
    jobTitle: {
      type: DataTypes.STRING
    },
    jobDescription: {
      type: DataTypes.STRING
    },
    jobAdditionalInfo: {
      type: DataTypes.STRING
    },
    codeRome: {
      type: DataTypes.STRING,
      field: 'codeROME'
    },
    status: {
      type: DataTypes.ENUM(
        'draft',
        'published',
        'fulfilled',
        'canceled'
      )
    },
    imageURL: {
      type: DataTypes.STRING
    },
    contractType: {
      type: DataTypes.ENUM(
        'cdi',
        'cdd-court',
        'cdd-long',
        'autre'
      )
    },
    salary: {
      type: DataTypes.STRING
    },
    jobDuration: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    pmsmpDuration: {
      type: DataTypes.STRING
    },
    pmsmpDate: {
      type: DataTypes.DATE
    },
    email: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    tableName: 'offres'
  })

  Offres.associate = (models) => {
  }


  Offres.afterUpdate((offre, options) => {
    const {status, _previousDataValues} = offre
    if (_previousDataValues.status === 'draft' && status === 'published') {
      const requestOptions = {
        uri: process.env.OFFRE_PUBLISHED_HOOK_URL,
        json: true,
        method: 'POST',
        body: {
          eventType: 'published-offre',
          offre
        }
      }
      console.debug(`New offre set to published [${offre.id}]: calling Zapier`)
      return request(requestOptions).catch(error => console.error(`Zapier webhook failed: ${error}`))
    }
  })

  return Offres
}

