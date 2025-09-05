// 1 Real Life Examples Of JS Promises
function getYoutubeVideo(url:String):Promise<String>{
    return new Promise(function(resolve, reject){
        // download the video
        if(url){
            resolve(" Video Downloaded");
        }else{
            reject(" Video Not Downloaded");
        }
    })
}

async function getFBNewsFeed(){
    // 2 try to handel error in async await
    try{
    let repsonse:Response = await fetch("https://www.facebook.com/feeds/");
    let data:JSON = await repsonse.json();
    console.log(`Successfully loaded ${data}`)
    }catch(error){
        console.log(`News Feed Didn't Load Error Occurred ${error}`);
    }
}

getYoutubeVideo("https://www.youtube.com/watch?v=1").then(function(video){
    console.log(`Success ${video}`);
})
.catch(function(error){
    console.log("Error Occurred While Downloading The Video");
})
// 
getFBNewsFeed();