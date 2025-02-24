// เรียกใช้งาน sequelize (Concept: ORM)
const Sequelize = require("sequelize");

// เรียกใช้งาน dotenv (จากไฟล์ .env ที่สร้างไว้)
require("dotenv").config();

// สร้าง instance (ตัวแทน) ของ sequelize เพื่อทำงานกับ database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    // กำหนดรายละเอียดการเชื่อมต่อกับฐานข้อมูล เช่น host, port, dialect
    host: process.env.DB_HOST, // ที่อยู่ของฐานข้อมูล
    port: process.env.DB_PORT, // พอร์ตที่ใช้เชื่อมต่อฐานข้อมูล
    dialect: process.env.DB_DIALECT, // ชนิดของฐานข้อมูล (เช่น 'mysql', 'postgres', 'sqlite', ฯลฯ)

    // กำหนดการตั้งค่าการเชื่อมต่อฐานข้อมูลเพิ่มเติม
    pool: {
        max: 5, // จำนวนการเชื่อมต่อสูงสุดที่สามารถเปิดได้ใน pool
        min: 0, // จำนวนการเชื่อมต่อขั้นต่ำใน pool
        acquire: 30000, // เวลาที่ใช้ในการรอการเชื่อมต่อในมิลลิวินาที
        idle: 10000, // เวลาที่การเชื่อมต่อจะอยู่ว่างก่อนที่จะถูกปิดในมิลลิวินาที
    },
});

// ทำการเชื่อมต่อโดยจะทำงานร่วมกับไฟล์ models
sequelize
    .sync() // ฟังก์ชัน sync จะสร้างตารางในฐานข้อมูลที่ยังไม่มี
    .then(() => {
        console.log("Database connected"); // ถ้าการเชื่อมต่อสำเร็จ จะมีข้อความแสดง
    })
    .catch((err) => {
        console.log(err); // หากการเชื่อมต่อไม่สำเร็จ จะแสดงข้อผิดพลาด
    });

// ส่งออกไปเพื่อใช้งานกับ models
module.exports = sequelize;
