const express = require("express");

const router = express.Router();

const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

router.get(
  "/",
  verifyToken,
  allowRoles("SUPER_ADMIN", "DIRECTOR"),
  (req, res) => {
    res.json({
      message: "Lista de usuarios de VERA"
    });
  }
);

router.get(
  "/roles",
  verifyToken,
  allowRoles("SUPER_ADMIN"),
  (req, res) => {
    res.json({
      message: "Administración de roles y permisos"
    });
  }
);

module.exports = router;