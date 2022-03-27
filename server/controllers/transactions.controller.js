const dbTransactions = require("../models/transactions.schema");
const { v4: uuidv4 } = require("uuid");

class transactionsController {
  async getTransactions(req, res) {
    try {
      const transactions = await dbTransactions
        .find({})
        // .find({ userId: req.user.id })
        // .populate(["accountId", "categoryId"]);
      if (!transactions.length) {
        res.status(400).json({ message: "Could not find transactions" });
        return;
      }
      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTransactionByCategory(req, res) {
    try {
      const transactions = await dbTransactions.find({
        // userId: req.user.id,
        categoryId: req.params.categoryId,
      });
      if (!transactions.length) {
        res.status(400).json({ message: "Could not find transactions" });
        return;
      }
      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTransactionById(req, res) {
    try {
      const transaction = await dbTransactions.findById(req.params.id);
      if (!transaction) {
        res.status(400).json({ message: "Could not find transaction" });
        return;
      }
      res.status(200).json(transaction);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createTransaction(req, res) {
    const {
      accountId,
      categoryId,
      description,
      date,
      isIncome,
      person,
      check,
    } = req.body;
    try {
      const newTransaction = await dbTransactions.create({
        userId: uuidv4(),
        accountId,
        categoryId,
        description,
        date,
        isIncome,
        person,
        check,
      });
      if (!newTransaction) {
        res.status(400).json({ message: "Could not create transaction" });
        return;
      }
      res.status(201).json(newTransaction);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Errorr" });
    }
  }

  async editTransaction(req, res) {
    try {
      const transaction = await dbTransactions.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!transaction) {
        res.status(400).json({ message: "Could not find the transaction" });
      }
      res.status(200).json(transaction);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteTransaction(req, res) {
    try {
      const transaction = await dbTransactions.findByIdAndDelete(req.params.id);
      if (!transaction) {
        res.status(400).json({ message: "Could not delete transaction" });
        return;
      }
      res.status(200).json(`DELETE transaction ${transaction.description}`);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new transactionsController();
