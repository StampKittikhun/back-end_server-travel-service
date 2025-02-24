// เรียกใช้งาน Controller ที่เกี่ยวข้องกับการจัดการข้อมูลนักเดินทาง
const travellerCtrl = require("./../controllers/traveller.controller.js");

// เรียกใช้งาน Express เพื่อสร้าง Router
const express = require("express");
const router = express.Router();

// ส่วนของการจัดการเส้นทางเพื่อใช้งาน Controllers ที่สร้างขึ้นมา
// การใช้งาน HTTP Methods ต่างๆ:
// - POST: สำหรับเพิ่มข้อมูลใหม่
// - GET: สำหรับดึงข้อมูล
// - PUT: สำหรับอัปเดตข้อมูล
// - DELETE: สำหรับลบข้อมูล

// เส้นทางสำหรับเพิ่มข้อมูลนักเดินทางใหม่
router.post("/", travellerCtrl.createTraveller);

// เส้นทางสำหรับตรวจสอบการเข้าสู่ระบบโดยใช้ email และ password
// ในที่นี้จะใช้ `travellerEmail` และ `travellerPassword` เป็น parameter
router.get("/:travellerEmail/:travellerPassword", travellerCtrl.checkLoginTraveller);

// เส้นทางสำหรับอัปเดตข้อมูลนักเดินทางโดยระบุ travellerId
router.put("/:travellerId", travellerCtrl.updateTraveller);

// เส้นทางสำหรับลบข้อมูลนักเดินทางโดยระบุ travellerId
router.delete("/:travellerId", travellerCtrl.deleteTraveller);

// ส่งออก router ไปใช้งานในไฟล์อื่นๆ
module.exports = router;
