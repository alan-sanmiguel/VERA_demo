const jwt = require("jsonwebtoken");
const users = require("../data/users");

const SECRET_KEY = "vera-secret-key";

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Usuario o contraseña incorrectos"
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role
    },
    SECRET_KEY,
    {
      expiresIn: "2h"
    }
  );

  res.json({
    message: "Inicio de sesión correcto",
    token,
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role
    }
  });
};

module.exports = {
  login
};