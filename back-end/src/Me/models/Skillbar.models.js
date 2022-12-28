import { model, Schema } from "mongoose"



const skillbarSchema = new Schema({
    name:String,
    progress:Number,
    category:String,
})
const Skillbar = model('Skillbar',skillbarSchema);
export default Skillbar;