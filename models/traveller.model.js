// เรียกใช้งาน Sequelize (Concept: ORM) ซึ่งช่วยในการจัดการฐานข้อมูลด้วย JavaScript
const Sequelize = require("sequelize");

// เชื่อมต่อกับฐานข้อมูลผ่านไฟล์ db.js
const sequelize = require("./../db/db.js");

// สร้างโมเดลสำหรับตาราง "traveller_tb"
const Traveller = sequelize.define(
    "traveller", // ชื่อโมเดลที่ใช้
    {
        // กำหนดคอลัมน์ต่างๆ ในตาราง "traveller_tb"
        travellerId: {
            type: Sequelize.INTEGER, // ประเภทข้อมูลเป็น INTEGER
            primaryKey: true, // กำหนดว่าเป็นคีย์หลัก
            autoIncrement: true, // ค่าจะเพิ่มอัตโนมัติเมื่อมีการเพิ่มข้อมูล
            field: "travellerId", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travellerFullname: {
            type: Sequelize.STRING(50), // ประเภทข้อมูลเป็น STRING ที่มีความยาวสูงสุด 50 ตัวอักษร
            allowNull: false, // คอลัมน์นี้ไม่สามารถเป็น NULL ได้
            field: "travellerFullname", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travellerEmail: {
            type: Sequelize.STRING(50), // ประเภทข้อมูลเป็น STRING ที่มีความยาวสูงสุด 50 ตัวอักษร
            allowNull: false, // คอลัมน์นี้ไม่สามารถเป็น NULL ได้
            field: "travellerEmail", // ชื่อคอลัมน์ในฐานข้อมูล
        },
        travellerPassword: {
            type: Sequelize.STRING(50), // ประเภทข้อมูลเป็น STRING ที่มีความยาวสูงสุด 50 ตัวอักษร
            allowNull: false, // คอลัมน์นี้ไม่สามารถเป็น NULL ได้
            field: "travellerPassword", // ชื่อคอลัมน์ในฐานข้อมูล
        },
    },
    {
        sequelize, // เชื่อมโยงกับ instance ของ sequelize ที่สร้างในไฟล์ db.js
        tableName: "traveller_tb", // ชื่อของตารางในฐานข้อมูล
        freezeTableName: true, // ห้าม Sequelize เปลี่ยนชื่อของตาราง (ตามปกติ Sequelize จะทำการเปลี่ยนชื่อเป็นพหูพจน์)
        timestamps: false, // ไม่ใช้ฟีเจอร์ timestamps (createdAt, updatedAt)
    }
);

// ส่งออกโมเดล Traveller เพื่อใช้งานในไฟล์อื่น
module.exports = Traveller;
