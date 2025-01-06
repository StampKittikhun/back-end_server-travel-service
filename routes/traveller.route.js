const travellerCtrl = require("./../controllers/traveller.controller.js");

const express = require("express");
const router = express.Router();

//ส่วนของการจัดการเส้นทางเพื่อใช้งาน Controllers เพื่อให้ทำงานกับตาราง traveller_tb
//เพิ่มจะใช้ post() แก้ไขจะใช้ put() ลบจะใช้ delete()
//ค้นหา ตรวจสอบ ดึง ดู ใช้ get()
router.post("/", travellerCtrl.createTraveller);

router.get("/:travellerEmail/:travellerPassword", travellerCtrl.checkLoginTraveller);

router.put("/:travellerId", travellerCtrl.updateTraveller);

router.delete("/:travellerId", travellerCtrl.deleteTraveller);

//ส่งออกไปเพื่อใช้งานกับ controllers
module.exports = router;
