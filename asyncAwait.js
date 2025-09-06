const sampleData=async ()=>{
    try{
        let response=await fetch("https://wwww.google.com")
        console.log(response)
    }catch(err){
        console.log("erroe accessing google"+err)
    }
}
sampleData()