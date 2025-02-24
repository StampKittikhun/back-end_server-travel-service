// เรียกใช้งาน Controller ที่เกี่ยวข้องกับการจัดการข้อมูลการเดินทาง
const travelCtrl = require("./../controllers/travel.controller.js");

// เรียกใช้งาน Express เพื่อสร้าง Router
const express = require("express");
const router = express.Router();

// ส่วนของการจัดการเส้นทางเพื่อใช้งาน Controllers ที่สร้างขึ้นมา
// การใช้งาน HTTP Methods ต่างๆ:
// - POST: สำหรับเพิ่มข้อมูลใหม่
// - GET: สำหรับดึงข้อมูล
// - PUT: สำหรับอัปเดตข้อมูล
// - DELETE: สำหรับลบข้อมูล

// เส้นทางสำหรับเพิ่มข้อมูลการเดินทางใหม่
router.post("/", travelCtrl.createTravel);

// เส้นทางสำหรับดึงข้อมูลการเดินทางทั้งหมดของนักเดินทางที่ระบุ (ใช้ travellerId)
router.get("/:travellerId", travelCtrl.getAllTravelByTravellerId);

// เส้นทางสำหรับดึงข้อมูลการเดินทางเฉพาะที่ระบุด้วย travelId
router.get("/travelId/:travelId", travelCtrl.getTravelByTravelId);

// เส้นทางสำหรับอัปเดตข้อมูลการเดินทางโดยระบุ travelId
router.put("/:travelId", travelCtrl.updateTravel);

// เส้นทางสำหรับลบข้อมูลการเดินทางโดยระบุ travelId
router.delete("/:travelId", travelCtrl.deleteTravel);

// ส่งออก router ไปใช้งานในไฟล์อื่นๆ
module.exports = router;
