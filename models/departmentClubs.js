const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    department:{
        type:String,
        enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    name:{
      type:String
    },
    title: {type:String},
    img: {type:String},
    type:{
      type:String,
      enum:["Club","Coordinator","Team","Societies"]
    },
    description: { type: String, default: "" },
    show: { type: Boolean, default: true },
    sourceOfInfo: {
        type: Object,
        default: {
          name: null,
          email: null,
          designation: null,
          department: null,
        }
      }
},{timestamps:true})

module.exports=mongoose.model("departmentClubs",Schema);