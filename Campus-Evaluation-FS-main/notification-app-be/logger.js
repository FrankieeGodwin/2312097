async function Log(state,level,Package,message){
    try{
        const res = await fetch("http://4.224.186.213/evaluation-service/logs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                state: state,
                level: level,
                package: Package,
                message: message   
            }
        });

        const data = await res.json();
    }catch(err){
        console.log("Error: ",err);
    }
}

export default Log;