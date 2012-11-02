<%@ page language="java" contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
var EventManager = tactile.EventManager;
var Enum = tactile.Enum

var custom = {
	init: function() {
		EventManager.addListener("slide-image", tactile.Enum.Events.touchend, function(e){
			custom.swipeHandler(e);
		});
		setTimeout(function() { tactile.page.getComponent("view-main-top").show(); },2000);
	},

	swipeHandler: function(e) {
		var deltaXAbs = Math.abs(e.deltaX); 
		var deltaYAbs = Math.abs(e.deltaY);
		 
		if((e.deltaX > 0) && (deltaXAbs > deltaYAbs)){
			window.location = "menu.jsp";
		} 
	}
	
};

tactile.page.onready(custom.init);

