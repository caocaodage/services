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
})()/** md5:aHR0cDovLzM5LjEwOC4xNTcuMTEzOjgwMDgvIy9sb2dpbi9sb2dpbj89MQ==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/