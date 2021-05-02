const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class LinkId extends Model { }

LinkId.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'comment',
                key: 'id',
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'link_id',
    }
);

module.exports = LinkId;