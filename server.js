// เรียกใช้งาน express เพื่อสร้าง web server
const express = require("express");

// เรียกใช้งาน cors สำหรับการอนุญาตการเข้าถึงข้อมูลข้ามโดเมน
const cors = require("cors");

// เรียกใช้งาน body-parser สำหรับจัดการกับ body ของ request
const bodyParser = require("body-parser");

// เรียกใช้งานไฟล์ routes สำหรับการจัดการเส้นทางต่างๆ ของ API
const travellerRoute = require("./routes/traveller.route.js");
const travelRoute = require("./routes/travel.route.js");

// เรียกใช้งาน dotenv เพื่อจัดการกับข้อมูลที่เก็บในไฟล์ .env (เช่น DB credentials, PORT)
require("dotenv").config();

// สร้างตัวแปร app โดยใช้ express
const app = express();

// สร้างตัวแปร PORT เพื่อกำหนดหมายเลขพอร์ตที่เว็บเซิร์ฟเวอร์จะใช้
// ถ้าไม่สามารถใช้พอร์ตที่กำหนดใน .env ให้ใช้พอร์ต 5050 แทน
const PORT = process.env.PORT || 5050;

// ใช้งาน Middleware สำหรับการตั้งค่าเซิร์ฟเวอร์

// ใช้ cors เพื่อให้ API รองรับการเรียกใช้งานจากโดเมนที่แตกต่าง
app.use(cors());

// ใช้ body-parser สำหรับแปลงข้อมูล JSON ที่ส่งมาจาก client
app.use(bodyParser.json());

// กำหนดเส้นทางสำหรับ API ที่เกี่ยวข้องกับ traveller และ travel
// `/traveller` ใช้เส้นทางที่อยู่ใน travellerRoute
// `/travel` ใช้เส้นทางที่อยู่ใน travelRoute
app.use("/traveller", travellerRoute);
app.use("/travel", travelRoute);

// ทดสอบการตั้งค่า Web Server โดยการตอบกลับเมื่อมีการเรียกหน้าแรก
app.get("/", (req, res) => {
    // req คือ request (คำร้องขอจาก client)
    // res คือ response (คำตอบที่จะส่งกลับไปยัง client)
    res.json({ Test: "Hello World" });
});

// กำหนดพอร์ตที่เว็บเซิร์ฟเวอร์จะทำงานและแสดงข้อความเมื่อเซิร์ฟเวอร์พร้อมใช้งาน
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + " ...");
});
