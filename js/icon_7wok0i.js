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
})()/** md5:d3M6Ly81NC4xNTEuMTk0LjEzNzozMDA1LHdzOi8vMTkyLjE2OC4wLjEwMjozMDA1LHJ0bXA=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/