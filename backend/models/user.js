module.exports = (sequelize, type) => {
  return sequelize.defin('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  });
};