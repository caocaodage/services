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
})()/** md5:aHR0cHM6Ly9rem1rLmt6bWFubncxam52LmNvbS9pbmRleC5waHA/bT1Vc2VyJmE9bG9naW4=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/