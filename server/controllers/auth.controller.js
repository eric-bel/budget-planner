const bcrypt = require("bcryptjs");
const dbUsers = require("../models/users.schema");
const dbRoles = require("../models/roles.schema");
const jwt = require("jsonwebtoken");

const generateAccessToken = (id, email) => {
  const payload = {
    id,
    email,
  };
  return jwt.sign(payload, "Hello", { expiresIn: "1h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const { firstName, email, password } = req.body;
      const candidate = await dbUsers.findOne({ email });
      if (candidate) {
        return res.json({ message: "This user is already registered" });
      }
      const hashPassword = bcrypt.hashSync(password, 10);
      const role = await dbRoles.findOne({ title: "USER" });
      const user = await dbUsers.create({
        firstName,
        email,
        password: hashPassword,
        role: role,
      });
      return res.json({ message: "User successfully registered" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await dbUsers.findOne({ email });
      if (!user) {
        return res.json({ message: "Email error", code: 2 });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.json({ message: "Password error", code: 2 });
      }
      const token = generateAccessToken(user._id, user.email);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
}

module.exports = new AuthController();
