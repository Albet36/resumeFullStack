import mongoose from "mongoose"


export const db = async() => {
    try {
      await mongoose.connect(process.env.URL_MONGO);  
      console.log('connect db success');
    } catch (error) {
        console.log('connect db failed');
    }
}