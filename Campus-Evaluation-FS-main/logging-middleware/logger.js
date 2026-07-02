async function Log(state,level,package,message){
    try{
        const res = await fetch("http://4.224.186.213/evaluation-service/logs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                state,
                level,
                package,
                message     
            }
        });

        const data = await res.json();
    }catch(err){
        console.log("Error: ",err);
    }
}

export default logger;