var SpaceTrade = SpaceTrade || {};

SpaceTrade.MineableObject = function(stats) {
	newMineObj.baseMaterial = stats.baseMaterial || "rock";
	newMineObj.compositionDict = stats.compositionDict || {"rock" : 1.0};
	newMineObj.totalVolume = stats.totalVolume || 10000;

	newMineObj.compVolDict = Object.keys(newMineObj.compositionDict).reduce(function(prev, curr) {
		console.log(prev + ", " + curr);
		console.log(newMineObj.compositionDict[curr]);
		prev[curr] = Math.floor(newMineObj.compositionDict[curr] * newMineObj.totalVolume);
		return prev;
	}.bind(this), {});
}
/*
SpaceTrade.MineableObject = {
	create : function(stats) {
		var newMineObj = Object.create(this);

		newMineObj.baseMaterial = stats.baseMaterial || "rock";
		newMineObj.compositionDict = stats.compositionDict || {"rock" : 1.0};
		newMineObj.totalVolume = stats.totalVolume || 10000;

		newMineObj.compVolDict = Object.keys(newMineObj.compositionDict).reduce(function(prev, curr) {
			console.log(prev + ", " + curr);
			console.log(newMineObj.compositionDict[curr]);
			prev[curr] = Math.floor(newMineObj.compositionDict[curr] * newMineObj.totalVolume);
			return prev;
		}, {});

		return newMineObj;
	},

};*/