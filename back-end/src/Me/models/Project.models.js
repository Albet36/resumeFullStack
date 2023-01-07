import { model, Schema } from "mongoose"

// interface IEducation{
//     name:string,
//     date:string,
//     description:string
// }
const ProjectSchema = new Schema({
    name: String,
    dateStart:String,
    dateEnd:String,
    position:String,
    technologyUsed:String,
    detail:String,
    description:String
})
const Project = model('Project',ProjectSchema);
export default Project;