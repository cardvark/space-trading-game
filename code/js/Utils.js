var SpaceTrade = SpaceTrade || {};


SpaceTrade.MathUtils = {

	rand : function(min, max) {
		return Math.random() * (max - min) + min;
	},

	get_rand_item : function(rawMatList, rawRatioList) {
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

	get_item_quantity : function(){

	},

};

SpaceTrade.TransformUtils = {

	dict_to_lists : function (dictItem) {
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
	not_negative : function(value) {
		if (value < 0) {
			console.log("You reduced something to below zero, fix this.");
			return 0;
		} else {
			return value;
		}
	},
}