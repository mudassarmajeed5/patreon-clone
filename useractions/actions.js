"use server"
import connectDB from "@/Database/mongodb"
import User from "@/models/User";

export const fetchUser = async(username) => {
//   await connectDB();
  let u = await User.findOne({username:username});
  let user = u.toObject({flattenObjectIds:true})
  return user;
}
export const UpdateProfile=async(data,oldusername) => {
    // await connectDB();
    // Check if username is available
    let NData = Object.fromEntries(data);
    if(oldusername!==NData.username)
    {
        let u = await User.findOne({username:NData.username});  
        if (u){
            return({error:"Username exists"})
        };

    }
    await User.updateOne({email:NData.email},NData);

    
}
