using Microsoft.AspNetCore.SignalR;

namespace SignalRApp.Hubs;

public class UserHub : Hub
{
    public static int TotalViews { get; set; } = 0;
    public static int TotalUsers { get; set; } = 0;

    public override Task OnConnectedAsync()
    {
        TotalUsers++;
        Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();
        return base.OnConnectedAsync();
    }

    public override Task OnDisconnectedAsync(Exception? exception)
    {
        TotalUsers--;
        Clients.All.SendAsync("updateTotalUsers", TotalUsers).GetAwaiter().GetResult();        
        return base.OnDisconnectedAsync(exception);
    }


/*
    //To be able to use SEND method on the client to NOT send notification
    public async Task NewWindowLoaded()
    {
        TotalViews++;
        //sending the new state or the changes to all clients who is connected to hub
        await Clients.All.SendAsync("updateTotalViews", TotalViews);
    } 
*/

    //To be able to use SEND method on the client to NOT send notification
    public async Task<string> NewWindowLoaded(string name)
    {
        TotalViews++;
        //sending the new state or the changes to all clients who is connected to hub
        await Clients.All.SendAsync("updateTotalViews", TotalViews);
        return $"total views from {name} = {TotalViews}";
    } 




}