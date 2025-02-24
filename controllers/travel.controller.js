// 📦 Import Travel model สำหรับทำงานกับฐานข้อมูล
const Travel = require("./../models/travel.model.js");

// ✅ ฟังก์ชันเพิ่มข้อมูลการเดินทาง
const createTravel = async (req, res) => {
    try {
        // 🚀 สร้างข้อมูลการเดินทางใหม่จากข้อมูลใน request body
        const result = await Travel.create(req.body);
        
        // ✅ ส่งกลับ response สำเร็จพร้อมข้อมูลที่ถูกสร้าง
        res.status(201).json({ message: "Success to create travel: ", data: result });
    } catch (error) {
        // ❌ หากเกิดข้อผิดพลาด ให้ส่ง error
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

// ✅ ฟังก์ชันอัปเดตข้อมูลการเดินทางตาม `travelId`
const updateTravel = async (req, res) => {
    try {
        // 🚀 อัปเดตข้อมูลการเดินทางในฐานข้อมูลตาม `travelId`
        const result = await Travel.update(req.body, {
            where: {
                travelId: req.params.travelId, // ใช้ `travelId` จาก params
            },
        });
        
        // ✅ ส่งกลับ response สำเร็จ
        res.status(200).json({ message: "Success to update travel: ", data: result });
    } catch (error) {
        // ❌ หากเกิดข้อผิดพลาด ให้ส่ง error
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

// ✅ ฟังก์ชันลบข้อมูลการเดินทางตาม `travelId`
const deleteTravel = async (req, res) => {
    try {
        // 🚀 ลบข้อมูลการเดินทางจากฐานข้อมูลตาม `travelId`
        const result = await Travel.destroy({
            where: {
                travelId: req.params.travelId, // ใช้ `travelId` จาก params
            },
        });
        
        // ✅ ส่งกลับ response สำเร็จ
        res.status(200).json({ message: "Success to delete travel: ", data: result });
    } catch (error) {
        // ❌ หากเกิดข้อผิดพลาด ให้ส่ง error
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

// ✅ ฟังก์ชันดึงข้อมูลการเดินทางทั้งหมดของนักเดินทาง
const getAllTravelByTravellerId = async (req, res) => {
    try {
        // 🚀 ค้นหาข้อมูลการเดินทางทั้งหมดของนักเดินทางตาม `travellerId`
        const result = await Travel.findAll({
            where: {
                travellerId: req.params.travellerId, // ใช้ `travellerId` จาก params
            },
        });

        // ❓ ตรวจสอบว่ามีข้อมูลการเดินทางหรือไม่
        if (!result || result.length === 0) {
            // ❌ หากไม่มีข้อมูล ให้ส่ง status 404
            res.status(404).json({ message: "Travel not found" });
        } else {
            // ✅ หากมีข้อมูลการเดินทาง ให้ส่งกลับ status 200 พร้อมข้อมูล
            res.status(200).json({ message: "Travel found: ", data: result });
        }
    } catch (error) {
        // ❌ หากเกิดข้อผิดพลาด ให้ส่ง error
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

// ✅ ฟังก์ชันดึงข้อมูลการเดินทางตาม `travelId`
const getTravelByTravelId = async (req, res) => {
    try {
        // 🚀 ค้นหาข้อมูลการเดินทางตาม `travelId`
        const result = await Travel.findOne({
            where: {
                travelId: req.params.travelId, // ใช้ `travelId` จาก params
            },
        });

        // ❓ ตรวจสอบว่ามีข้อมูลการเดินทางหรือไม่
        if (!result) {
            // ❌ หากไม่มีข้อมูล ให้ส่ง status 404
            res.status(404).json({ message: "Travel not found" });
        } else {
            // ✅ หากมีข้อมูลการเดินทาง ให้ส่งกลับ status 200 พร้อมข้อมูล
            res.status(200).json({ message: "Travel found: ", data: result });
        }
    } catch (error) {
        // ❌ หากเกิดข้อผิดพลาด ให้ส่ง error
        res.status(500).json({ message: "Failed to create travel: " + error });
    }
};

// 🚀 ส่งออกฟังก์ชันทั้งหมดเพื่อใช้งานกับ routes
module.exports = {
    createTravel,
    updateTravel,
    deleteTravel,
    getAllTravelByTravellerId,
    getTravelByTravelId,
};
