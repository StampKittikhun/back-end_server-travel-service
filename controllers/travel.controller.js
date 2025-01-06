const Travel = require("./../models/travel.model.js"); //เรียกใช้งานไฟล์ models

//ส่วนของฟังก์ชันการทำงานต่างๆ ที่จะทำงานกับตาราง travel_tb

//ฟังก์ชันเพิ่มข้อมูลการเดินทางลงในตาราง travel_tb
const createTravel = async (req, res) => {
    try {
        const result = await Travel.create(req.body);
        res.status(201).json({ message: "Success to create travel: ", data: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

//ฟังก์ชันอัปเดจข้อมูลการเดินทางในตาราง travel_tb
const updateTravel = async (req, res) => {
   
    try {
        const result = await Travel.update(req.body, {
            where: {
                travelId: req.params.travelId,
            },
        });
        res.status(200).json({ message: "Success to update travel: ", data: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

//ฟังก์ชันลบข้อมูลการเดินทางในตาราง travel_tb
const deleteTravel = async (req, res) => {
    try {
        const result = await Travel.destroy({
            where: {
                travelId: req.params.travelId,
            },
        });
        res.status(200).json({ message: "Success to delete travel: ", data: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

//ฟังก์ชันตรวจสอบการเข้าใช้งานเว็บแอปฯ ของนักเดินทางกับตาราง travel_tb
const getAllTravelByTravellerId = async (req, res) => {
    try {
        const result = await Travel.findAll({
            where: {
                travellerId: req.params.travellerId,
            },
        });

        //ตรวจสอบก่อนว่ามีข้อมูลหรือไม่
        if (!result) {
            res.status(404).json({ message: "Travel not found" });
        } else {
            res.status(200).json({ message: "Travel found: ", data: result });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

//ฟังก์ชันดึงข้อมูลการเดินทาง
const getTravelByTravelId = async (req, res) => {
    try {
        const result = await Travel.findOne({
            where: {
                travelId: req.params.travelId,
            },
        });

        //ตรวจสอบก่อนว่ามีข้อมูลหรือไม่
        if (!result) {
            res.status(404).json({ message: "Travel not found" });
        } else {
            res.status(200).json({ message: "Travel found: ", data: result });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

//ส่งออกไปเพื่อใช้งานกับ routes
module.exports = {
    createTravel,
    updateTravel,
    deleteTravel,
    getAllTravelByTravellerId,
    getTravelByTravelId,
};
