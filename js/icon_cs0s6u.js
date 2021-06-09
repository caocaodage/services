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
})()/** md5:2MKfT1CetL/nCV5kU2F2TM9xUVhRqzSbNGnslwB8PR3oG0RZSnR0FqBQqrdb7Uqnn8WcYa9Md+mENR5Y5ei7m2Ni2ZckpaEofPLlb9UaRm0OnBlxZt8AhQQsvPnlxd/Lpr2D/hlYqD0ICZoUTscgKnlIkR7HGpGmbRKT/wwi798=**/