const CallBack = require("../models/callBackModel");

const callBackForm = async (req, res) => {
  try {
    const response = req.body;
    await CallBack.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = callBackForm;
