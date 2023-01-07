import { model, Schema } from "mongoose"

// interface IEducation{
//     name:string,
//     date:string,
//     description:string
// }
const CareAboutSchema = new Schema({
    description:String
})
const CareAbout = model('CareAbout',CareAboutSchema);
export default CareAbout;