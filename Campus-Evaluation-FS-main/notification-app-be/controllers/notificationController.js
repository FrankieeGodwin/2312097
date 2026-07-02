import Log from "../logger.js";
import notifications from "../notifications.js";
export const getNotifications = async (req,res)=>{
    try{
        const {userId}=req.params;
        console.log(userId);
        let userNotifications=[];
        for(let noti of notifications){
            if(noti.userId == userId){
                userNotifications.push(noti);
            }
        }
        if(userNotifications.length === 0){
            Log("backend","Info","controller","No notifications found for user");
            return res.status(404).json({message : "No notifications found for the user"});
        }
        Log("backend","Info","controller","Notifications Retrieved");
        return res.status(200).json(userNotifications);
    }catch(err){
        console.log("Error: ",err);
    }
}

export const addNotifications = async(req,res)=>{
    try{
        const {userId, notificationId, notificationMessage, time, date} =req.body;


        notifications.push({
            userId:userId,
            notificationId:notificationId,
            notificationMessage:notificationMessage,
            time:time,
            date:date
        })

        Log("backend","Info","coontroller",`Notifications added for user ${userId}`);
        return res.status(201).json({message:"Notificaitons Added"});
    }catch(err){
        console.log("Error: ",err);
    }
}