const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const DeptProgrammeSchema = new mongoose.Schema(
    {
        "Name": {
            type: String
        },
        "Seats": {
            type: String
        },

        department: {
            type: String,
            enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
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
    }, {
    timestamps: true,
}
);

//Model---------------------------->
const Model = mongoose.model("deptProgrammes", DeptProgrammeSchema);

//Export----------------------------->
module.exports = Model;
