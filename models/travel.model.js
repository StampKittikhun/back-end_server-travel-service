// เรียกใช้งาน sequelize (Concept: ORM)
const Sequelize = require("sequelize");

// เรียกใช้งานไฟล์ db.js ซึ่งเป็นการเชื่อมต่อกับฐานข้อมูล
const sequelize = require("./../db/db.js");

// สร้างโมเดล "Travel" สำหรับตาราง "travel_tb"
const Travel = sequelize.define(
    "travel", // ชื่อของโมเดลที่ใช้
    {
        // กำหนดคอลัมน์ต่างๆ ในตาราง
        travelId: {
            type: Sequelize.INTEGER, // กำหนดประเภทข้อมูลเป็น INTEGER
            primaryKey: true, // กำหนดว่าเป็นคีย์หลัก
            autoIncrement: true, // ค่าเพิ่มอัตโนมัติเมื่อมีการเพิ่มข้อมูล
            field: "travelId", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travellerId: {
            type: Sequelize.INTEGER, // ประเภทข้อมูลเป็น INTEGER
            allowNull: false, // คอลัมน์นี้ห้ามมีค่าเป็น NULL
            field: "travellerId", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travelPlace: {
            type: Sequelize.STRING(200), // ประเภทข้อมูลเป็น STRING และจำกัดความยาวเป็น 200 ตัวอักษร
            allowNull: false, // คอลัมน์นี้ห้ามมีค่าเป็น NULL
            field: "travelPlace", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travelStartDate: {
            type: Sequelize.STRING(30), // ประเภทข้อมูลเป็น STRING และจำกัดความยาวเป็น 30 ตัวอักษร
            allowNull: false, // คอลัมน์นี้ห้ามมีค่าเป็น NULL
            field: "travelStartDate", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travelEndDate: {
            type: Sequelize.STRING(30), // ประเภทข้อมูลเป็น STRING และจำกัดความยาวเป็น 30 ตัวอักษร
            allowNull: false, // คอลัมน์นี้ห้ามมีค่าเป็น NULL
            field: "travelEndDate", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travelCostTotal: {
            type: Sequelize.DOUBLE, // ประเภทข้อมูลเป็น DOUBLE (เลขทศนิยม)
            allowNull: false, // คอลัมน์นี้ห้ามมีค่าเป็น NULL
            field: "travelCostTotal", // ชื่อคอลัมน์ในฐานข้อมูล
        },
    },
    {
        sequelize, // เชื่อมโยงกับ instance ของ sequelize ที่ถูกสร้างในไฟล์ db.js
        tableName: "travel_tb", // กำหนดชื่อของตารางในฐานข้อมูล
        freezeTableName: true, // ห้าม Sequelize เปลี่ยนชื่อของตาราง (ตามปกติ Sequelize จะทำการเปลี่ยนชื่อเป็นพหูพจน์)
        timestamps: false, // ไม่ใช้ฟีเจอร์ timestamps (createdAt, updatedAt)
    }
);

// ส่งออกโมเดล Travel ไปใช้งานในไฟล์อื่น
module.exports = Travel;
