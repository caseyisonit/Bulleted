"use strict";
var sequelize =
module.exports = (sequelize, DataTypes) => {
  const Journals = sequelize.define("Journals", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT,
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
  Journals.associate = function(models) {
    Journals.belongsTo(models.User, {foreignKey: "UserId", as: "user"});
    Journals.hasMany(models.Weeks, {through: "Weeks", foreignKey: "WeeksId", as: "weeks"});
    Journals.hasMany(models.Months, {through: "Months", foreignKey: "MonthsId", as: "months"}),
    Journals.hasMany(models.Todays, {through: "Todays", foreignKey: "TodaysId", as: "todays"}),
    Journals.hasMany(models.Trackers, {through: "Trackers", foreignKey: "TrackersId", as: "trackers"})
  };
  return Journals;
};