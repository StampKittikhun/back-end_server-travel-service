const travelCtrl = require("./../controllers/travel.controller.js");

const express = require("express");
const router = express.Router();

//ส่วนของการจัดการเส้นทางเพื่อใช้งาน Controllers เพื่อให้ทำงานกับตาราง travel_tb
//เพิ่มจะใช้ post() แก้ไขจะใช้ put() ลบจะใช้ delete()
//ค้นหา ตรวจสอบ ดึง ดู ใช้ get()
router.post("/", travelCtrl.createTravel);

router.get("/:travellerId", travelCtrl.getAllTravelByTravellerId);

router.get("/travelId/:travelId", travelCtrl.getTravelByTravelId);

router.put("/:travelId", travelCtrl.updateTravel);

router.delete("/:travelId", travelCtrl.deleteTravel);

//ส่งออกไปเพื่อใช้งานกับ controllers
module.exports = router;
