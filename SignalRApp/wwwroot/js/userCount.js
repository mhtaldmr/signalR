///////////////////////////////////////////
//create connection
var connectionUserCount = new signalR.HubConnectionBuilder()
    //.configuraLogging(signarR.LogLevel.Information)
    .withUrl("/hubs/userCount", signalR.HttpTransportType.WebSockets).build();

///////////////////////////////////////////
//connect to methods that invokes aka receive notifications from hub
//for views count
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.textContent = value.toString();
})

//for users count
connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.textContent = value.toString();
})

///////////////////////////////////////////
//send hub methods aka send notifications to hub
//send is using to get NO notifications back
/*
function newWindowLoadOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}
*/

//invoke hub methods aka send notifications to hub
//invoke is using to get A notification configured on the server!!!
//Also we can send datas to server just by writing "NewWindowLoaded" like "Malleyo"
function newWindowLoadOnClient() {
    connectionUserCount.invoke("NewWindowLoaded", "Malleyo").then((value) => console.log(value));
}


///////////////////////////////////////////
//start connection

//if start is succuessfull
function fulfilled(){
    //do sth if its OK
    console.log("Connection to UserHub Successful!");
    newWindowLoadOnClient();
} 

//if start is rejected
function rejected(){
    //do sth if its NOT OK
    console.log("Connection to UserHub Rejected!");
}

//star
connectionUserCount.start().then(fulfilled, rejected); 