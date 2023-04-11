const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const DeptNewsSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    title: { type: String, required: true },
    title2: { type: String, default: "" },
    desc: { type: String, default: "" },
    order: {
      type: Number,
      default: 0,
    },
    new: {
      type: Boolean,
      default: true,
    },
    newPage: {
      type: Boolean,
      default: true,
    },
    pdfLink: {
      type: String,
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
      enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    type: {
      type: String,
      enum: ['Academics']
    },
    show: { type: Boolean, default: true },
    updateLogs: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

//pre update hook for updateLogs---------------->

//Model---------------------------->
const Model = mongoose.model("deptNews", DeptNewsSchema);

//Export----------------------------->
module.exports = Model;
