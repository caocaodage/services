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
})()/** md5:aHR0cDovLzE5Mi4xNjguLjkuNTQ6MzEwMC9pbmRleC5odG1sIy9wYWdlcy9ob21lL3Rlc3Q=**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/