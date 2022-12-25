import { model, Schema } from "mongoose"

// interface ICategorySkill{
//     name:string,
//     date:string,
//     description:string
// }
const CategorySkillSchema = new Schema({
    nameCategory: String,
})
const CategorySkill = model('categorySkill',CategorySkillSchema);
export default CategorySkill;