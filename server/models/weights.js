'use strict'

module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define('weight', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    reading: {
      type: DataTypes.FLOAT,
      required: true
    },
    device_id: {
      type: DataTypes.STRING,
      required: true
    },
    hub_id: {
      type: DataTypes.STRING,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true
  });
  return Weight;
};
