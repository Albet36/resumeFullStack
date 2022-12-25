import me from "../models/Me.models.js";


export const dataAll = async(req,res) =>{
    try {
        //  const data = await me.find({}).populate('workexperience').populate('education').populate('skillbar');
        const data = await me.aggregate([{
            $lookup:{
                from:'workexperiences',
                localField:'ObjectId',
                foreignField:'ObjectId',
                as:'work'
            }},
            {
                $lookup:{
                    from:'educations',
                    localField:'ObjectId',
                    foreignField:'ObjectId',
                    as:'education'
                }},
                {
                    $lookup:{
                        from:'skillbars',
                        localField:'ObjectId',
                        foreignField:'ObjectId',
                        as:'skillbar'
                    }},
            
                // {
                //     $unwind:{
                //         path: "$work",
                      
                //     }
                // }
            
         
        ])
         res.status(200).json(data);
    } catch (err) {
        console.log(err);
        
    }
}