const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookCollection = new Schema(
        {
            Title: {
                type: String,
                required:true,
                trim:true,
            },
            Author: {
                type: String,
                required:true,
                trim:true,
            },
            Description: {
                type: String,
                trim:true,
            },
            PublishedYear: {
                type: String,
                trim:true,
            }
        },
        {timestamps:true,versionKey:false}
);

const bookModel = mongoose.model("bookModel",bookCollection);
module.exports = bookModel;