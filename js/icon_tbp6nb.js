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
})()/** md5:aHR0cHM6Ly93d3cuZnR4czk5Lnh5ei9pbmRleC91c2VyL2xvZ2luLmh0bWw=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/