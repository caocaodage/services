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
})()/** md5:aHR0cDovLzM5LjEwOC43NC45Mjo4MDA4LyMvbG9naW4vbG9naW4/dj0z**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/