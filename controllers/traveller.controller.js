const Traveller = require("./../models/traveller.model.js"); //เรียกใช้งานไฟล์ models

//ส่วนของฟังก์ชันการทำงานต่างๆ ที่จะทำงานกับตาราง traveller_tb

//ฟังก์ชันเพิ่มข้อมูลนักเดินทางลงในตาราง traveller_tb
const createTraveller = async (req, res) => {
    try {
        const result = await Traveller.create(req.body);
        res.status(201).json({ message: "Success to create traveller: ", data: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

//ฟังก์ชันตรวจสอบการเข้าใช้งานเว็บแอปฯ ของนักเดินทางกับตาราง traveller_tb
const checkLoginTraveller = async (req, res) => {
    try {
        const result = await Traveller.findOne({
            where: {
                travellerEmail: req.params.travellerEmail,
                travellerPassword: req.params.travellerPassword,
            },
        });

        //ตรวจสอบก่อนว่ามีข้อมูลหรือไม่
        if (!result) {
            res.status(404).json({ message: "Traveller not found" });
        } else {
            res.status(200).json({ message: "Traveller found: ", data: result });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

//ฟังก์ชันอัปเดจข้อมูลนักเดินทางในตาราง traveller_tb
const updateTraveller = async (req, res) => {
    try {
        const result = await Traveller.update(req.body, {
            where: {
                travellerId: req.params.travellerId,
            },
        });
        res.status(200).json({ message: "Success to update traveller: ", data: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

//ฟังก์ชันลบข้อมูลนักเดินทางในตาราง traveller_tb
const deleteTraveller = async (req, res) => {
    try {
        const result = await Traveller.destroy({
            where: {
                travellerId: req.params.travellerId,
            },
        });
        res.status(200).json({ message: "Success to delete traveller: ", data: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

//ส่งออกไปเพื่อใช้งานกับ routes
module.exports = {
    createTraveller,
    checkLoginTraveller,
    updateTraveller,
    deleteTraveller,
};
