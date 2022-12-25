import { model, Schema, Types } from 'mongoose';
import Education from './Education.models.js';
import Skillbar from './Skillbar.models.js';

import WorkExperience from './Work.models.js';

// interface IMe{
//     education: Types.ObjectId;
//     workexperience: Types.ObjectId;
//     skillbar: Types.ObjectId;
//     name:string,
//     age:string,
//     address:string,
//     avatar?:string,
//     about:string
// }
const meSchema = new Schema({
    name: String,
    age: String,
    address:String,
    avatar: String,
    about:String,
    positionDeal:String,
    email:String,
    phone:String,
    education: [{ type: Schema.Types.ObjectId, ref: Education }],
    workexperience: [{ type: Schema.Types.ObjectId, ref: WorkExperience }],
    skillbar: [{ type: Schema.Types.ObjectId, ref: Skillbar }]
});

const me = model('Me',meSchema);
export default me;