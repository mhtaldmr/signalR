using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRApp.Hubs;
using SignalRApp.Models;

namespace SignalRApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IHubContext<DeathlyHallowsHub> _hubContext;

    public HomeController(ILogger<HomeController> logger,IHubContext<DeathlyHallowsHub> hubContext)
    {
        _logger = logger;
        _hubContext = hubContext;
    }

    public IActionResult Index()
    {
        return View();
    }

    public async Task<IActionResult> DeathlyHallows(string type)
    {
        if (SD.DeathlyHallowRace.ContainsKey(type))
        {
            SD.DeathlyHallowRace[type]++;
        }

        await _hubContext.Clients.All.SendAsync("updateDeathlyHallowsCount",
            SD.DeathlyHallowRace[SD.Cloak],
            SD.DeathlyHallowRace[SD.Stone],
            SD.DeathlyHallowRace[SD.Wand]
        );
        return Accepted();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        _logger.Log(LogLevel.Information,"Error");
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
