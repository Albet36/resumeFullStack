import { model, Schema } from "mongoose"

// interface IWorkExperience{
//     name:string,
//     date:string,
//     position:string,
//     link:string,
//     description:string,
// }
const WorkExperienceSchema = new Schema({
    name: String,
    dateStart:String,
    dateEnd:String,
    position:String,
    link:String,
    description:String,
})
const WorkExperience = model('workexperience',WorkExperienceSchema);
export default WorkExperience;