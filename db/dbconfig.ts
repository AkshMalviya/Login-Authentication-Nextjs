import mongoose from "mongoose";
type : process.env.MONGODB_URI  = string
export async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        const connection = mongoose.connection;
    }
}