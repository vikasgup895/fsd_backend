import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    publishedDate: {type: Date, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},    
    

});
const Book =  mongoose.model('MyBook', bookSchema);
export default Book;