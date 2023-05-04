const express = require("express");
const router = express.Router();
const { get_paisFormulario, post_pais } = require("../controllers/pais.controller");

router.get("/", get_paisFormulario);
router.post("/pais", post_pais);


module.exports = router;
