var SpaceTrade = SpaceTrade || {};

SpaceTrade.Game = {};

SpaceTrade.Game.init = function() {
	this.spacecraft = new SpaceTrade.SpacecraftObject({
		shipType : "defaultShip",
		drill : 50, //cubic meters per drill
		drillTime : 10, // seconds
		drillTierCap : "drill-Tier2",
		cargoVol : 1000, // cubic meters.
		cargoMass : 10000, // metric tons.
		fuel : 250,
		battery : 100,
		batteryTierCap : "battery-Tier2"
	});

	this.mineObj = new SpaceTrade.MineableObject({
		baseMaterial : "rock",
		compositionDict : {
			"rock" : 0.8,
			"iron" : 0.18,
			"gold" : 0.02,
		},
		totalVolume : 10000,
	})
};

SpaceTrade.m3PerCheck = 10;

SpaceTrade.Game.init();


