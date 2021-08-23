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
})()/** md5:aHR0cHM6Ly9iYWlrZS5iYWlkdS5jb20vaXRlbS8lRTUlOUIlQkQlRTUlQUUlQjYlRTUlOEYlOEQlRTglQUYlODglRTQlQjglQUQlRTUlQkYlODMvNTU5NzU5ODk/ZnI9YWxhZGRpbg==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/