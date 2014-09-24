/* css()
 *
 * Adjusts the CSS styles of a selected element
 *
 * Parameter:
 * -new styles (to be programmed as an object which contains an unlimited number of style properties)
 *
 * Requires: Core.js
 */
	
	GS.css = function(newStyles){
		var results = this.init;
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if (testParam(newStyles)){
				for (var j in newStyles){
					element.style[j] = newStyles[j];
				}
			} else {
				throw new Error("CSS properties to edit are undefined.");
			}
		};
		return this;
	};