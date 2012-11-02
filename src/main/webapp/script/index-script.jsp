<%@ page language="java" contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="count" value="3" scope="page"/>
var EventManager = tactile.EventManager;
var Enum = tactile.Enum

window.addEventListener('load', function() {
    setTimeout(scrollTo, 0, 0, 1);
}, false);

var custom = {
	init: function() {

		// add reset event
		EventManager.addListener("lay-root", tactile.Enum.Events.doubletap, function(e){
			custom.redirectStart();
		});

		setTimeout(function() { tactile.page.getComponent("view").show(); },2000);
		setTimeout(function() { tactile.page.getComponent("view").hide(); },5000);
		setTimeout(function() { tactile.page.getComponent("view-netbiscuits").show(); },7000);
		setTimeout(function() { tactile.page.getComponent("view-netbiscuits").hide(); },10000);
		setTimeout(function() { tactile.page.getComponent("view-proudly").show(); },12000);
		setTimeout(function() { tactile.page.getComponent("view-proudly").hide(); },15000);
		setTimeout(function() { custom.redirectStart(); }, 17000);

	},
	
	redirectStart: function() {
		window.location = 'start.jsp'; 
	}
	
};

tactile.page.onready(custom.init);

