import { model, Schema } from "mongoose"
import CategorySkill from "./CategorySkill.js";


const skillbarSchema = new Schema({
    name:String,
    progress:Number,
    category:String,
    category: [{ type: Schema.Types.ObjectId, ref: CategorySkill }],
})
const Skillbar = model('Skillbar',skillbarSchema);
export default Skillbar;