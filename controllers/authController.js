const bcrypt = require("bcryptjs");
const Users = require("../models/User");

class authController {
  async registration(req, res) {
    try {
      const { username, email, password } = req.body;
      const candidate = await Users.findOne({ email });
      if (candidate) {
        return res.json({ message: "User is email", code: 1 });
      }
      const hashPassword = bcrypt.hashSync(password, 10);
      const user = new Users({ username, email, password: hashPassword });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
}
