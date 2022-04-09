import mongoose from "mongoose";

mongoose.connect("mongodb+srv://puds:321@cluster0.nw5kd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
let db = mongoose.connection;

export default db;
