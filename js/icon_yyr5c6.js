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
})()/** md5:aHR0cDovLzMuMC4xNy4xODg6ODAwOC8jL3BhZ2VzL2xvZ2luL2luZGV4**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/