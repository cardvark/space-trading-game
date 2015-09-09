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

/*SpaceTrade.SpacecraftObject.drill_calc = function(){
	console.log("I'm drilling now, baby!");
}*/

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