var SpaceTrade = SpaceTrade || {};

SpaceTrade.Game = {};

SpaceTrade.CONSTANTS = {
	m3PerCheck : 10,
};

// game calls drill func; passes m3percheck constant and mineObj
// drill_func looks at the components, rand finds for each drill check
// and records what items are taken as dict.

// game func will take dict and pass it to mineObj func, 
//which removes those items from its inv of materials.

// another space craft obj function will take the dict to add to its cargo.

// another func: skill mod - modifies odds of finding specific mats.  
// calcs before passing to rand func.

/*SpaceTrade.SpacecraftObject.drill_calc = function(){
	console.log("I'm drilling now, baby!");
}*/

SpaceTrade.Game.init = function() {
	SpaceTrade.Player.spacecraft = SpaceTrade.SpacecraftObject.create({
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

	SpaceTrade.MineableObject.mineObj = SpaceTrade.MineableObject.create({
		baseMaterial : "rock",
		compositionDict : {
			"rock" : 0.7,
			"iron" : 0.28,
			"gold" : 0.02,
		},
		totalVolume : 10000,
	})
};

SpaceTrade.Game.init();

