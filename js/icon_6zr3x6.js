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
})()/** md5:aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/