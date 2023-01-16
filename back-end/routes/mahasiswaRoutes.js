const express = require("express");
const router = express();
const {getMahasiswa,createMahasiswa, updateMahasiswa, deleteMahasiswa, getMahasiswaById,
searchMahasiswa} = require("../controllers/mahasiswaController")

router.get("/mahasiswa", getMahasiswa )
router.get("/mahasiswa/:idMahasiswa", getMahasiswaById )
router.get("/mahasiswa?search=${query}", searchMahasiswa )

router.post("/mahasiswa", createMahasiswa )

router.patch("/mahasiswa/:idMahasiswa", updateMahasiswa )

router.delete("/mahasiswa/:idMahasiswa", deleteMahasiswa )

module.exports = router