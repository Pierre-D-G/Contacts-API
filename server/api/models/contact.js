const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('contacts', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    avatar_url: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'http://www.st2299.com/data/wallpapers/141/wp-image-59514836-plain-background-images.jpg',
      validate: {
        isUrl: true
      }
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    home_phone: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    mobile_phone: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    work_phone: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    street_address: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    },
    zip_code: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    }

  })}
