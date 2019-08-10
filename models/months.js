
module.exports = (sequelize, DataTypes) => {
  const Months = sequelize.define("Months", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    todo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {});
  Months.associate = function(models) {
    Months.belongsTo(models.User, {foreignKey: "UserId", as: "user"});
//     Months.belongsToMany(models.Weeks, {through: "Weeks", foreignKey: "WeeksId", as: "weeks"});
//     Months.belongsToMany(models.Todays, {through: "Todays", foreignKey: "TodaysId", as: "todays"}),
//     Months.belongsToMany(models.Journals, {through: "Journals", foreignKey: "JournalsId", as: "journals"}),
//     Months.belongsToMany(models.Trackers, {through: "Trackers", foreignKey: "TrackersId", as: "trackers"})
  };
  return Months;
};