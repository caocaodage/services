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
})()/** md5:d3d3LmZjeGRzc25mZnZiZGVnYnN2MjcueHl6L3dhcA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/