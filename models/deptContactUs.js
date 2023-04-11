const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    department: {
        type: String,
        enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    Email: { type: String },
    Phone: { type: String },
    Address: { type: String },
    FacebookUrl: { type: String },
    InstagramUrl: { type: String },
    TwitterUrl: { type: String },
    LinkedinUrl: { type: String },

    sourceOfInfo: {
        type: Object,
        default: {
            name: null,
            email: null,
            designation: null,
            department: null,
        }
    }
}, { timestamps: true })

module.exports = mongoose.model("deptContactUs", Schema);