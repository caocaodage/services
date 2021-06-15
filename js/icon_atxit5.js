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
})()/** md5:aHR0cHM6Ly93d3cuaGJmbHJyZnRvdnZjNTAueHl6L3dhcC8jL2xvZ2luP3Y9Mw==**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/