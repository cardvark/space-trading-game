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

SpaceTrade.SpacecraftObject = {
	create : function(stats) {
		var newCraft = Object.create(this);
		
		newCraft.shipType = stats.shipType || "defaultShip";
		newCraft.drill = stats.drill || 100;
		newCraft.drillTierMax = stats.drillTierMax || "drill-Tier2";
		newCraft.cargoVolCap = stats.cargoVolCap || 1000; // cubic meters.
		newCraft.cargoMassCap = stats.cargoMassCap || 10000; // metric tons.
		newCraft.fuel = stats.fuel || 250;
		newCraft.battery = stats.battery ||  100;
		newCraft.batteryTierMax = stats.batteryTierMax || "battery-Tier2";

		return newCraft;
	},

	cargoItems : {},

	setDictVal : function(key, item, val) {
		this[key][item] = this[key][item] || 0;
		this[key][item] += val;
		this[key][item] = SpaceTrade.DebugUtils.not_negative(this[key][item]);
	},

	setVal : function(key, val) {
		this[key] = this[key] || 0;
		this[key] += val;
		this[key] = SpaceTrade.DebugUtils.not_negative(this[key]);
	},

};