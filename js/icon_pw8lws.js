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
})()/** md5:aHR0cHM6Ly9tLmZjeGRzc25mZnZiZGV2Z2JzMzYueHl6L2xvZ2lu**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/