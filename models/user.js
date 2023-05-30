const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
        {
            Title: {
                type: String,
                required:true,
            },
            Author: {
                type: String,
                required:true,
            },
            Description: {
                type: String,
            },
            PublishedYear: {
                type: String,
            }
        },
        {timestamps:true,versionKey:false}
);

const User = mongoose.model("User",userSchema);
module.exports = User;