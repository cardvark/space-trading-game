var SpaceTrade = SpaceTrade || {};

SpaceTrade.MineableObject = function(stats) {
	this.baseMaterial = stats.baseMaterial || "rock";
	this.compositionDict = stats.compositionDict || {"rock" : 1.0}
	this.totalVolume = stats.totalVolume || 10000;
	this.compVolDict = Object.keys(this.compositionDict).reduce(function(prev, curr) {
		console.log(prev + ", " + curr);
		console.log(this.compositionDict[curr]);
		prev[curr] = this.compositionDict[curr] * this.totalVolume;
		return prev;
	}.bind(this), {});
}