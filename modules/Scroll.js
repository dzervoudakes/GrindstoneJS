/**
 * scroll()
 * 
 * Captures the native "onscroll" event and executes a function each time the event triggers
 * 
 * Parameter:
 * -callback
 */
	
	$.fn.scroll = function(_callback){
		
		this.init(function(){
			
			$(this).on("scroll",function(){
				if (_callback){
					_callback();
				}
			});
			
		});
		
		return this;
 	};
 