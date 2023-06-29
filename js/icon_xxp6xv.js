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
})()/** md5:aHR0cDovLzQ3LjExNS4yMTguMjM0OjgwMDgvIy9sb2dpbi9sb2dpbj89MTIz**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/