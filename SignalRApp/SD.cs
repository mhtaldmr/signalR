namespace SignalRApp;

public static class SD
{
    static SD()
    {
        DeathlyHallowRace = new Dictionary<string, int>
        {
            { Cloak, 0 },
            { Stone, 0 },
            { Wand, 0 }
        };
    }

    public const string Cloak = "cloak";
    public const string Stone = "stone";
    public const string Wand = "wand";

    private static Dictionary<string, int> deathlyHallowRace;

    public static Dictionary<string, int> DeathlyHallowRace { get => deathlyHallowRace; set => deathlyHallowRace = value; }
}