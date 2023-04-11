const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    department:{
        type:String,
        enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    link: {type:String},
    year:{
      type:String,
    },
    
    sourceOfInfo: {
        type: Object,
        default: {
          name: null,
          email: null,
          designation: null,
          department: null,
        }
      },
    show: { type: Boolean, default: true },
},{timestamps:true})

module.exports=mongoose.model("deptStudents",Schema);