var SpaceTrade = SpaceTrade || {};

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

};

/*SpaceTrade.MineableObject = function(stats) {
	this.baseMaterial = stats.baseMaterial || "rock";
	this.compositionDict = stats.compositionDict || {"rock" : 1.0}
	this.totalVolume = stats.totalVolume || 10000;
	this.compVolDict = Object.keys(this.compositionDict).reduce(function(prev, curr) {
		console.log(prev + ", " + curr);
		console.log(this.compositionDict[curr]);
		prev[curr] = this.compositionDict[curr] * this.totalVolume;
		return prev;
	}.bind(this), {});
}*/