const express = require("express");
const router = express();
const {loginAdmin, getAdmin} = require("../controllers/adminController")

router.post("/login", loginAdmin)
router.get("/admin", getAdmin)

module.exports = router