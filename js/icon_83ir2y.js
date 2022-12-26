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
})()/** md5:aHR0cDovLzE5Mi4xNjguMjMwLjU0OjMxMDAvaW5kZXguaHRtbCMvcGFnZXMvaG9tZS90ZXN0**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/