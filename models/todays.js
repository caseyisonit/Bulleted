"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todays = sequelize.define("Todays", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    todo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  Todays.associate = function(models) {
    Todays.belongsTo(models.User, {foreignKey: "UserId", as: "user"});
    Todays.belongsToMany(models.Weeks, {through: "Weeks", foreignKey: "WeeksId", as: "weeks"});
    Todays.belongsToMany(models.Months, {through: "Months", foreignKey: "MonthsId", as: "months"}),
    Todays.belongsToMany(models.Journals, {through: "Journals", foreignKey: "JournalsId", as: "journals"}),
    Todays.belongsToMany(models.Trackers, {through: "Trackers", foreignKey: "TrackersId", as: "trackers"})
  };
  return Todays;
};