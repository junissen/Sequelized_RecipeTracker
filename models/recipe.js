module.exports = function(sequelize, DataTypes) {
  var sequelizeModel = sequelize.define("sequelizeModel", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breakfast: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mains: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    dessert: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    other: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    tried: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    scored: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return sequelizeModel
}
