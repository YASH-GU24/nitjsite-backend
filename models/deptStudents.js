const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    department:{
        type:String,
        enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf','cee','cai']
    },
    link: {type:String},
    year_branch:{
      type:String,
    },
    
    sourceOfInfo: {
      type:  String
  },
    show: { type: Boolean },
},{timestamps:true})

module.exports=mongoose.model("deptStudents",Schema);