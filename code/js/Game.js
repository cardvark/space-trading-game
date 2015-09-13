var SpaceTrade = SpaceTrade || {};

SpaceTrade.Game = {};

SpaceTrade.Constants = {
	M3_PER_CHECK : 10,
};

SpaceTrade.Game.init = function() {
	SpaceTrade.Player.currentShip = new SpaceTrade.Spacecraft({
		shipType : "defaultShip",
		drill : 50, //cubic meters per drill
		drillTime : 10, // seconds
		drillTierMax : "drill-Tier2",
		cargoVolCap : 1000, // cubic meters.
		cargoMassCap : 10000, // metric tons.
		fuel : 250,
		battery : 100,
		batteryTierMax : "battery-Tier2"
	});

	// need to create file and class for current mineable objects.

	SpaceTrade.MineableObject.mineObj = new SpaceTrade.MineableObject({
		baseMaterial : "rock",
		compositionDict : {
			"rock" : 0.7,
			"iron" : 0.28,
			"gold" : 0.02,
		},
		totalVolume : 10000,
	});
};

SpaceTrade.Game.init();

