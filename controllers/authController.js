const bcrypt = require("bcryptjs");
const Users = require("../models/User");
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
      const { username, email, password } = req.body;
      const candidate = await Users.findOne({ email });
      if (candidate) {
        return res.json({ message: "This user is already registered" });
      }
      const hashPassword = bcrypt.hashSync(password, 10);
      const user = new Users({ username, email, password: hashPassword });
      await user.save();
      return res.json({ message: "User successfully registered" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
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
