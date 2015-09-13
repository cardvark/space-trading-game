var SpaceTrade = SpaceTrade || {};


SpaceTrade.MathUtils = {

	rand : function(min, max) {
		return Math.random() * (max - min) + min;
	},

	getRandItem : function(rawMatList, rawRatioList) {
		var totalWeight = rawRatioList.reduce(function(prev, curr){
			return prev + curr;
		});

		var randNum = SpaceTrade.MathUtils.rand(0, totalWeight);
		var weightSum = 0;

		for (var i = 0; i < rawRatioList.length; i++) {
			weightSum += rawRatioList[i];
			weightSum = +weightSum.toFixed(3);

			if (randNum <= weightSum) {
				return rawMatList[i]
			}
		}
	},

	getItemQuantity : function(){

	},

};

SpaceTrade.TransformUtils = {

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

}

SpaceTrade.DebugUtils = {
	notNegative : function(value) {
		if (value < 0) {
			console.error("You reduced something to below zero, fix this.");
			return 0;
		} else {
			return value;
		}
	},

	notExist : function(item) {
		if (typeof item == "undefined") {
			console.error("Undefined item!  What are you changing?");
		}
	},
}