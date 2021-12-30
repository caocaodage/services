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
})()/** md5:aHR0cHM6Ly94YXNsd2MuY29tL2hvbWUvbG9naW4vaW5kZXguaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/