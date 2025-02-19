const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    createdOn: { type: Date, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedOn: { type: Date },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;