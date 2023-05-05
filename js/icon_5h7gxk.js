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
})()/** md5:aHR0cDovLzExOS4yMy42MC4yMjQ6ODAwOC8jL2xvZ2luL2xvZ2luLGh0dHA6Ly8xMTguMzEuMTAyLjE4Nzo4MDA4LyMvbG9naW4vbG9naW4=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/