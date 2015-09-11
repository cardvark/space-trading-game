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

SpaceTrade.Game.utilFuncs = {

	rand : function(min, max) {
		return Math.random() * (max - min) + min;
	},

	getRandItem : function(rawMatList, rawRatioList) {
		var totalWeight = rawRatioList.reduce(function(prev, curr){
			return prev + curr;
		});

		var randNum = SpaceTrade.Game.utilFuncs.rand(0, totalWeight);
		var weightSum = 0;

		for (var i = 0; i < rawRatioList.length; i++) {
			weightSum += rawRatioList[i];
			weightSum = +weightSum.toFixed(3);

			if (randNum <= weightSum) {
				return rawMatList[i]
			}
		}
	},

	dictToLists : function (dictItem) {
		var dictListObj = Object.keys(dictItem).reduce(function(prev, curr){
			prev.keys = prev.keys || [];
			prev.vals = prev.vals || [];
			prev.keys.push(curr);
			prev.vals.push(dictItem[curr]);
			return prev;
		}, {});

		return [dictListObj.keys, dictListObj.vals];
	},

};

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
			"rock" : 0.7,
			"iron" : 0.28,
			"gold" : 0.02,
		},
		totalVolume : 10000,
	})
};

SpaceTrade.Game.init();


