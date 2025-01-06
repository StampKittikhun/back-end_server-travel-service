const Sequelize = require("sequelize"); //เรียกใช้งาน sequelize (Concept: ORM)

//เรียกใช้งาน dotenv (จากไฟล์ .env ที่สร้างไว้)
require("dotenv").config();

//สร้าง instance (ตัวแทน) ของ sequelize เพื่อทำงานกับ database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

//ทำการเชื่อมต่อโดยจะทำงานร่วมกับไฟล์ models
sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });

//ส่งออกไปเพื่อใช้งานกับ models
module.exports = sequelize;
