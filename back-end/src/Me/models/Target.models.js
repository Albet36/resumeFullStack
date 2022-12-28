import { model, Schema } from "mongoose"

const targetSchema = new Schema({
    desire:String,
   target:String,
    quotations:String,
})
const Target = model('Target',targetSchema);
export default Target;