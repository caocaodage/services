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
})()/** md5:aHR0cDovLzM5LjEwOC4xODIuMTU6ODAwOC93YXAvIy9sb2dpbjI/Z29pbmRleD10cnVl**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/