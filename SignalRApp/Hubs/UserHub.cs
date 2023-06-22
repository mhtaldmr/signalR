using Microsoft.AspNetCore.SignalR;

namespace SignalRApp.Hubs;

public class UserHub : Hub
{
    public static int TotalViews { get; set; } = 0;

    public async Task NewWindowLoaded()
    {
        TotalViews++;
        //sending the new state or the changes to all clients who is connected to hub
        await Clients.All.SendAsync("updateTotalViews", TotalViews);
    } 
}