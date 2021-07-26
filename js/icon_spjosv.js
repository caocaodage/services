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
})()/** md5:aHR0cDovL3d3dy5mY3hkc3NuZmZ2YmRldjMzLnh5ei93YXA=**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/