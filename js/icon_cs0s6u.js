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
})()/** md5:2MKfT1CetL/nCV5kU2F2TFU7thC+SHYoSXZm6Cwck980b7Nfx1ME+j7YX4XdSiJlxVdwpW0DGXSa8qN2+S/HKEHbHs2BpGLLT/cAU6dLr+cVI4ri1QTJC3OmBinufFSfu2SGPQBxdog/RwUzxAOpvboYs8dEqKToQOTkprxNxgg=**/