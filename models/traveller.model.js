const Sequelize = require("sequelize"); //เรียกใช้งาน sequelize (Concept: ORM)
const sequelize = require("./../db/db.js"); //เรียกใช้งานไฟล์ db.js

const Traveller = sequelize.define(
    "traveller",
    {
        travellerId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "travellerId",
        },
        travellerFullname: {
            type: Sequelize.STRING(50),
            allowNull: false,
            field: "travellerFullname",
        },
        travellerEmail: {
            type: Sequelize.STRING(50),
            allowNull: false,
            field: "travellerEmail",
        },
        travellerPassword: {
            type: Sequelize.STRING(50),
            allowNull: false,
            field: "travellerPassword",
        },
    },
    {
        sequelize,
        tableName: "traveller_tb",
        freezeTableName: true,
        timestamps: false, //แนะนำให้ใส่ในกรณีที่ไม่ต้องการเวลา Timestamp ในตาราง
    }
);

module.exports = Traveller;
