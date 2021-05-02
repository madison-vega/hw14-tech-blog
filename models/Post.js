const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//Created the category model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_body {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'faction',
  }
);

module.exports = Post;
