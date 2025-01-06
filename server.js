const express = require("express"); //เรียกใช้งาน express
const cors = require("cors"); //เรียกใช้งาน cors
const bodyParser = require("body-parser"); //เรียกใช้งาน body-parser
//เรียกใช้งานไฟล์ routes
const travellerRoute = require("./routes/traveller.route.js");
const travelRoute = require("./routes/travel.route.js");

//เรียกใช้งาน dotenv (จากไฟล์ .env ที่สร้างไว้)
require("dotenv").config();

//สร้าง Web Server
const app = express();

//สร้างตัวแปรเก็บ Port number เพื่อใช้กับการเชื่อมต่อ Server ที่กำหนดไว้ที่ไฟล์ .env
//ทั้งนี้กรณีไม่สามารถใช้ Port number ที่กำหนดไว้ที่ .env ณ ที่นี้ให้ใช้ PORT 5050 แทน
const PORT = process.env.PORT || 5050;

//เพิ่มส่วนของ Middleware -------
//การเรียกใช้งานข้ามโดเมน
app.use(cors());
//จัดการ JSON
app.use(bodyParser.json());
//การจัดการเส้นทางเพื่อการเรียกใช้ API
app.use("/traveller", travellerRoute);
app.use("/travel", travelRoute);

//ทดสอบการเรียกใช้งาน Web Server (ทดสอบแล้วลบทิ้งได้) -----------
//เวลาทดสอบเรียก http://localhost:XXXX หรือ http://127.0.0.1:XXXX หรืือ http://IPAddress:XXXX
app.get("/", (req, res) => {
    //req : request, res : response
    res.json({ Test: "Hello World" });
});
//----------------------------------------------------------

//กำหนดช่องทางในการเชื่อมต่อ
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + " ...");
});
