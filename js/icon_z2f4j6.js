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
})()/** md5:aHR0cHM6Ly93d3cudWl6c2wueHl6L2luZGV4Lmh0bWwjL3BhZ2VzL2luZGV4L2luZGV4**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/