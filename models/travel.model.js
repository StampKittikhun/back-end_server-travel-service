const Sequelize = require("sequelize"); //เรียกใช้งาน sequelize (Concept: ORM)
const sequelize = require("./../db/db.js"); //เรียกใช้งานไฟล์ db.js

const Travel = sequelize.define(
    "travel",
    {
        travelId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "travelId",
        },
        travellerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: "travellerId",
        },
        travelPlace: {
            type: Sequelize.STRING(200),
            allowNull: false,
            field: "travelPlace",
        },
        travelStartDate: {
            type: Sequelize.STRING(30),
            allowNull: false,
            field: "travelStartDate",
        },
        travelEndDate: {
            type: Sequelize.STRING(30),
            allowNull: false,
            field: "travelEndDate",
        },
        travelCostTotal: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            field: "travelCostTotal",
        },
    },
    {
        sequelize,
        tableName: "travel_tb",
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Travel;
