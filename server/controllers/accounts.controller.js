const dbAccounts = require("../models/accounts.schema");
const { v4: uuidv4 } = require("uuid");

class AccountsControllers {
  async getAccounts(req, res) {
    try {
      const userAccounts = await dbAccounts.find({ userId: req._id });
      if (!userAccounts.length) {
        res.status(404).json({ message: "Could not find accounts" });
        return;
      }
      res.status(200).json(userAccounts);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAccountById(req, res) {
    try {
      const account = await dbAccounts.findById(req.params.id);
      if (!account) {
        res.status(404).json({ message: "Could not find account" });
        return;
      }
      res.status(200).json(account);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createAccount(req, res) {
    const { title, currencyId, balance } = req.body;
    try {
      const newAccount = await dbAccounts.create({
        UserId: uuidv4(),
        title: title,
        currencyId: currencyId,
        balance: balance,
      });
      if (!newAccount) {
        res.status(400).json({ message: "Could not create account" });
        return;
      }
      res.status(201).json(newAccount);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async editAccount(req, res) {
    try {
      const account = await dbAccounts.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!account) {
        res.status(404).json({ message: "Could not find account" });
        return;
      }
      res.status(200).json(account);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteAccount(req, res) {
    try {
      const account = await dbAccounts.findByIdAndDelete(req.params.id);
      if (!account) {
        res.status(400).json({ message: "Could not delete account" });
        return;
      }
      res.status(200).json(`DELETE account ${account.title}`);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new AccountsControllers();
