var SpaceTrade = SpaceTrade || {};

SpaceTrade.MineableObject = function(stats) {
	this.baseMaterial = stats.baseMaterial || "rock";
	this.compositionDict = stats.compositionDict || {"rock" : 1.0}
	this.totalVolume = stats.totalVolume || 10000;
}