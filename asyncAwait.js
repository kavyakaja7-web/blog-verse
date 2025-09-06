const sampleData=async ()=> {
    try{
        let response=aawait fetch("https://www.google.com");
        console.log(response)
    }catch(err){
        console.log("error accessing google:"+err)
    }

}
sampleData()
    