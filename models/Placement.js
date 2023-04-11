const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    department: {
      type: String,
      enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    company: {
      type: String,
    },
    package: {
      type: Number,
    },
    sourceOfInfoName: {
      type: String,
    },
    sourceOfInfoEmail: {
      type: String,
    },
    sourceOfInfoDesignation: {
      type: String,
    },
    sourceOfInfoDepartment: {
      type: String,
    },
    newPage: {
      type: Boolean,
    },
    show: { type: Boolean, default: true },
    order: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Placement", Schema);
