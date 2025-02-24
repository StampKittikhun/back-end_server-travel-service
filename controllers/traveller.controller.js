// เรียกใช้งานไฟล์ models
const Traveller = require("./../models/traveller.model.js");

// ส่วนของฟังก์ชันการทำงานต่างๆ ที่จะทำงานกับตาราง traveller_tb

// ฟังก์ชันเพิ่มข้อมูลนักเดินทางลงในตาราง traveller_tb
const createTraveller = async (req, res) => {
    try {
        // สร้างข้อมูลนักเดินทางใหม่จากข้อมูลใน req.body
        const result = await Traveller.create(req.body);
        
        // ส่งข้อความพร้อมข้อมูลนักเดินทางที่ถูกสร้างใหม่กลับไป
        res.status(201).json({ message: "Success to create traveller: ", data: result });
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการสร้างข้อมูล จะตอบกลับสถานะ 500 พร้อมข้อความข้อผิดพลาด
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

// ฟังก์ชันตรวจสอบการเข้าใช้งานเว็บแอปฯ ของนักเดินทางกับตาราง traveller_tb
const checkLoginTraveller = async (req, res) => {
    try {
        // ค้นหานักเดินทางในฐานข้อมูลตามอีเมล์และรหัสผ่านที่รับมาจาก params
        const result = await Traveller.findOne({
            where: {
                travellerEmail: req.params.travellerEmail,
                travellerPassword: req.params.travellerPassword,
            },
        });

        // ตรวจสอบก่อนว่ามีข้อมูลนักเดินทางหรือไม่
        if (!result) {
            // หากไม่พบข้อมูลจะตอบกลับสถานะ 404 และข้อความ "Traveller not found"
            res.status(404).json({ message: "Traveller not found" });
        } else {
            // หากพบข้อมูลจะส่งข้อมูลนักเดินทางกลับไปพร้อมสถานะ 200
            res.status(200).json({ message: "Traveller found: ", data: result });
        }
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูลจะตอบกลับสถานะ 500
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

// ฟังก์ชันอัปเดตข้อมูลนักเดินทางในตาราง traveller_tb
const updateTraveller = async (req, res) => {
    try {
        // อัปเดตข้อมูลนักเดินทางที่มี travellerId ตรงกับที่ส่งมาใน params
        const result = await Traveller.update(req.body, {
            where: {
                travellerId: req.params.travellerId,
            },
        });

        // ส่งข้อความยืนยันการอัปเดตข้อมูลกลับไปพร้อมสถานะ 200
        res.status(200).json({ message: "Success to update traveller: ", data: result });
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการอัปเดตข้อมูลจะตอบกลับสถานะ 500
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

// ฟังก์ชันลบข้อมูลนักเดินทางในตาราง traveller_tb
const deleteTraveller = async (req, res) => {
    try {
        // ลบข้อมูลนักเดินทางที่มี travellerId ตรงกับที่ส่งมาใน params
        const result = await Traveller.destroy({
            where: {
                travellerId: req.params.travellerId,
            },
        });

        // ส่งข้อความยืนยันการลบข้อมูลกลับไปพร้อมสถานะ 200
        res.status(200).json({ message: "Success to delete traveller: ", data: result });
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการลบข้อมูลจะตอบกลับสถานะ 500
        res.status(500).json({ message: "Failed to create traveller: " + error });
    }
};

// ส่งออกฟังก์ชันทั้งหมดให้สามารถใช้งานใน routes ได้
module.exports = {
    createTraveller,
    checkLoginTraveller,
    updateTraveller,
    deleteTraveller,
};
