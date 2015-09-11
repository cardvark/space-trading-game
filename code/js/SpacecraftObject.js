var SpaceTrade = SpaceTrade || {};

/*SpaceTrade.SpacecraftObject.init = function(stats) {
	this.shipType = stats.shipType;
	this.drill = stats.drill;
	this.drillTierCap = stats.drillTierCap;
	this.cargoVol = stats.cargoVol; // cubic meters.
	this.cargoMass = stats.cargoMass; // metric tons.
	this.fuel = stats.fuel;
	this.battery = stats.battery;
	this.batteryTierCap = stats.batteryTierCap;
}
*/

SpaceTrade.SpacecraftObject = function(stats) {
	this.shipType = stats.shipType || "defaultShip";
	this.drill = stats.drill || 100;
	this.drillTierCap = stats.drillTierCap || "drill-Tier2";
	this.cargoVol = stats.cargoVol || 1000; // cubic meters.
	this.cargoMass = stats.cargoMass || 10000; // metric tons.
	this.fuel = stats.fuel || 250;
	this.battery = stats.battery ||  100;
	this.batteryTierCap = stats.batteryTierCap || "battery-Tier2";

	this.drill_calc = function(m3PerCheck, mineObj){
		console.log(this.drill, m3PerCheck);
		console.log(mineObj);
		console.log("I'm drilling now, baby!");
	};
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

function rand (min, max) {
	return Math.random() * (max - min) + min;
}

function getRandItem (rawMatList, rawRatioList) {
	var totalWeight = rawRatioList.reduce(function(prev, curr){
		return prev + curr;
	});

	var randNum = rand(0, totalWeight);
	var weightSum = 0;

	for (var i = 0; i < rawRatioList.length; i++) {
		weightSum += rawRatioList[i];
		weightSum = +weightSum.toFixed(3);

		if (randNum <= weightSum) {
			return rawMatList[i]
		}
	}
}

function dictToLists(dictItem) {
	var dictListObj = Object.keys(dictItem).reduce(function(prev, curr){
		prev.keys = prev.keys || [];
		prev.vals = prev.vals || [];
		prev.keys.push(curr);
		prev.vals.push(dictItem[curr]);
		return prev;
	}, {});

	return [dictListObj.keys, dictListObj.vals];
}