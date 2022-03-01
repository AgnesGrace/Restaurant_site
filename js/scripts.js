/*$(function(){//same as document.addEventListener("DOMContentLoaded"...)

	//same as document.querySelector("#navbarToggle").addEventListener("blur"...)
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse("hide");
		}
	});

});

(function (global) {
	var ag = {};
	var homeHtmlUrl = "pages/main-content.html";

	//function for inserting innerHTML for 'select'
	var insertHtml = function (selector, html) {
		var targetEle = document.querySelector(selector);
		targetEle.innerHTML = html;

	};

	// to show the loading icon inside element identified by 'selector'
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/loading.gif'></div>";
		insertHtml(selector, html);
	};

	// page load before images and css
	document.addEventListener("DOMContentLoaded", function (event) {
		 //show the home view on first load
		 showLoading("#main-content");
		 $ajaxUtils.sendGetRequest(
		 	homeHtmlUr,
		 	function (responseText) {
		 		document.querySelector("#main-content")
		 			.innerHTML = responseText;

		 	},
		 	false);
	});

	global.$ag = ag;

}) (window);*/