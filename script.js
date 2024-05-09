  // Async/Await

  async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1() 

// Try/Catch

setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
            setTimeout(()=>{ 
                    console.log(rahul)  
            }, 100)
    }
    catch(err){
            console.log("Balle balle")
    }
    
    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." )
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
    }, 4000) 