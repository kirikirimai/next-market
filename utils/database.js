import mongoose from "mongoose";

const connectDB= async ()=>{

    try {
        await mongoose.connect("mongodb+srv://admin:hiro0812@cluster0.zwy0d.mongodb.net/?retryWrites=true&w=majority")
        console.log("success connected to mongoDB")
        
    } catch (error) {
        console.log("error")
        throw new Error()
    }

}
export default connectDB;