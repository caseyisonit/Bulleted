"use strict";
module.exports = (sequelize, DataTypes) => {
  const Weeks = sequelize.define("Weeks", {
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
  Weeks.associate = function(models) {
    Weeks.belongsTo(models.User, {foreignKey: "UserId", as: "user"});
    Weeks.belongsToMany(models.Todays, {through: "Todays", foreignKey: "TodaysId", as: "todays"});
    Weeks.belongsToMany(models.Months, {through: "Months", foreignKey: "MonthsId", as: "months"}),
    Weeks.belongsToMany(models.Journals, {through: "Journals", foreignKey: "JournalsId", as: "journals"}),
    Weeks.belongsToMany(models.Trackers, {through: "Trackers", foreignKey: "TrackersId", as: "trackers"})
  };
  return Weeks;
};