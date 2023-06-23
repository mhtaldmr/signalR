
//create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

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


//invoke hub methods aka send notifications to hub
function newWindowLoadOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

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