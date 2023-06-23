using Microsoft.AspNetCore.SignalR;

namespace SignalRApp.Hubs;

public class DeathlyHallowsHub : Hub
{
   
    public Dictionary<string, int> GetRaceResults()
    {
        return SD.DeathlyHallowRace;
    }

}