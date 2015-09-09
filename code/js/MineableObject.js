var SpaceTrade = SpaceTrade || {};

SpaceTrade.MineableObject = function(stats) {
	this.baseMaterial = stats.baseMaterial || "rock";
	this.compositionDict = stats.compositionDict || {"rock" : 1.0}
	this.totalVolume = stats.totalVolume || 10000;
/*	this.getVolDict = function(compDict, totalVol) {
		var tempDict = Object.keys(compDict).reduce(function(prev, curr){
			console.log(prev + ", " + curr);
			console.log(compDict[curr]);
			prev[curr] = compDict[curr] * totalVol;
			return prev;
		}, {});
		return tempDict;
	}*/

	this.compVolDict = Object.keys(this.compositionDict).reduce((prev, curr) => {
		console.log(prev + ", " + curr);
		console.log(this.compositionDict[curr]);
		prev[curr] = this.compositionDict[curr] * this.totalVolume;
		return prev;
	}, {});
}
/*
	ConstObj = function() {
		this.compositionDict = {"rock" : 0.8, 
								"iron" : 0.15, 
								"gold" : 0.05};
		this.totalVolume = 10000;
		this.compVolDict = Object.keys(this.compositionDict).reduce(function(prev, curr){
			prev[curr] = this.compositionDict[curr] * this.totalVol;
			return prev;
		}, {});
	}

tempObj = new ConstObj();*/