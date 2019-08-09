// module.exports = function(sequelize, DataTypes) {
//     var Todays = sequelize.define("Today", {
//       // Giving the Todays model a name of type STRING
//       name: DataTypes.STRING
//     });
//     Todays.associate = function(models) {
//       // Associating Todays with User
//       // When an Todays is deleted, also delete any associated Users
//       Todays.hasOne(models.User, {
//         onDelete: "cascade"
//       });
//     };
//     return Todays;
//   };