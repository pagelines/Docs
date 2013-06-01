!function ($) {

	// Load After Page Load
	$(document).ready(function() {
	
		$.plNavigation.init()
		
	})
	
	// Load After Images
	$(window).load(function() {
	
	})
	
	$.plNavigation = {
		
		init: function(){
			
			this.navDetection()
			
		}
		
		, navDetection: function(){
			
			var url = window.location;
			
			console.log(url)
			
			// Will also work for relative and absolute hrefs
			$('.nav-detect a').filter(function() {
				
			    return this.href == url
			
			}).addClass('active-page').closest('.nav-list').addClass('active-menu')
			
			$('.nav-detect .lead a').filter(function() {
				
			    return this.href == url
			
			}).closest('.nav-list').addClass('menu-active')
			
		}
		
	}
	
}(window.jQuery);