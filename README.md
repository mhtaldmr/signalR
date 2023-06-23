# SignalR

This project is a demonstration of SignalR technology.

## What is SignalR?
SignalR  is a library that simplifies the process of adding real-time web functionality to applications. Real-time web functionality is the ability to have server code push content to connected clients instantly as it becomes available, rather than having the server wait for a client to request new data.

Also, it gives you oppourtunity to control the real-time notifications to send which clients. Server can send the notifications with different options like All, Except(userIds),Client(clientid),Others, Groups, OtherinGroups.. etc.


<img src="https://github.com/mhtaldmr/signalR/blob/master/images/signalR.PNG" alt="signalR"/> 


### What I have used so far:
- .Net8 MVC Application
- Microsoft.AspNetCore.SignalR package.

## Installation and Usage

- To get the project :
```
    git clone https://github.com/mhtaldmr/signalR.git
```
- To start the project : 
```c
    dotnet run
```
---


## m
- This app is showing how many users view the page by how many times. If the client refresh the page, the total user view will be increased by 1 and other users will see it in real-time. Also, if another client open the page user count will be increased and their user view also increase the total user count.
- In the upper section, users can vote for the items. If the users select one of them, the counter will increase also. It doesnt matter which client increased.



|           1 Client            | 2 Client                                                 
|-------------------------------|-------------------------------
|<img src="https://github.com/mhtaldmr/signalR/blob/master/images/page1.PNG" alt="page1"/>   |<img src="https://github.com/mhtaldmr/signalR/blob/master/images/page2.PNG" alt="page2"/>       

     
---