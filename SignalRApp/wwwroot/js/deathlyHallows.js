var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");

///////////////////////////////////////////
//create connection
var connectionDeathlyHallows = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/deathlyHallows").build();

///////////////////////////////////////////
//connect to methods that invokes aka receive notifications from hub
connectionDeathlyHallows.on("updateDeathlyHallowsCount", (cloak,stone,wand) => {
    cloakSpan.textContent = cloak.toString();
    stoneSpan.textContent = stone.toString();
    wandSpan.textContent = wand.toString();
});


///////////////////////////////////////////
//start connection
//if start is succuessfull
function fulfilled(){
    connectionDeathlyHallows.invoke("GetRaceResults").then((raceCounter) =>{
        cloakSpan.innerText =  raceCounter.cloak.toString();
        stoneSpan.innerText = raceCounter.stone.toString();
        wandSpan.innerText = raceCounter.wand.toString();
    });
    //do sth if its OK
    console.log("Connection to UserHub Successful!");
} 

//if start is rejected
function rejected(){
    //do sth if its NOT OK
    console.log("Connection to UserHub Rejected!");
}

//start
connectionDeathlyHallows.start().then(fulfilled, rejected); 