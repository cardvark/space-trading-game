var SpaceTrade = SpaceTrade || {};

SpaceTrade.Spacecraft = function(stats) {
	this.shipType = stats.shipType || "defaultShip";
	this.drill = stats.drill || 100;
	this.drillTierMax = stats.drillTierMax || "drill-Tier2";
	this.cargoVolCap = stats.cargoVolCap || 1000; // cubic meters.
	this.cargoMassCap = stats.cargoMassCap || 10000; // metric tons.
	this.fuel = stats.fuel || 250;
	this.battery = stats.battery ||  100;
	this.batteryTierMax = stats.batteryTierMax || "battery-Tier2";

	this.cargoItems = {};

	this.setFuel = function(val) {
		setVal("fuel", val);
	};

	this.setCargoItems = function(item, val) {
		setDictVal("cargoItems", item, val);
	};

	// private "generic" functions for setting Spacecraft property values.
	// Keeps things a bit more DRY.
	var setDictVal = function(key, item, val) {
		SpaceTrade.DebugUtils.notExist(this[key]);
		this[key][item] = this[key][item] || 0;
		this[key][item] += val;
		this[key][item] = SpaceTrade.DebugUtils.notNegative(this[key][item]);
	}.bind(this);

	var setVal = function(key, val) {
		SpaceTrade.DebugUtils.notExist(this[key]);
		this[key] = this[key] || 0;
		this[key] += val;
		this[key] = SpaceTrade.DebugUtils.notNegative(this[key]);
	}.bind(this);

}
/*
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

		itemSetting.call(newCraft);

		return newCraft;
	},

	cargoItems : {},

};

function itemSetting() {

	this.setFuel = function(val) {
		setVal("fuel", val);
	};

	this.setCargoItems = function(item, val) {
		setDictVal("cargoItems", item, val);
	};

	// private "generic" functions for setting Spacecraft property values.
	// Keeps things a bit more DRY.
	var setDictVal = function(key, item, val) {
		SpaceTrade.DebugUtils.notExist(this[key]);
		this[key][item] = this[key][item] || 0;
		this[key][item] += val;
		this[key][item] = SpaceTrade.DebugUtils.notNegative(this[key][item]);
	}.bind(this);

	var setVal = function(key, val) {
		SpaceTrade.DebugUtils.notExist(this[key]);
		this[key] = this[key] || 0;
		this[key] += val;
		this[key] = SpaceTrade.DebugUtils.notNegative(this[key]);
	}.bind(this);

};*/