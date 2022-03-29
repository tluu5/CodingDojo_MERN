const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required."],
        minLength: [3, "Title must be at least 3 characters."]
    },
    company:{
        type: String,
        required: [true, "Company is required."],
        minLength: [3, "Company must be at least 3 characters."]
    },
    salary:{
        type: Number,
        min: [70000, "Don't sell yourself too short!"]
    },
    remote:{
        type: Boolean,
        required: true
    },
    color:{
        type: String,
        default: "lightpink"
    },
    numJobs:{
        type: Number,
        required: [true, "Number of jobs are require."],
        min: [1, "You need to have at least 1 job applied."],
        default: 1
    },
    active:{
        type: Boolean,
        required: [true, "Active status is required."],
        default: true
    }
}, {timestamps:true})

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;