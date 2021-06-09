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
})()/** md5:2MKfT1CetL/nCV5kU2F2TM9xUVhRqzSbNGnslwB8PR3oG0RZSnR0FqBQqrdb7UqnswhOvu1fsyGDoB9i1bUXyrKJGoL23/E6WJIAO9ZwZ9a9zaxtlZU0qni1LvRW6cAw/qF8D23+LjGpyIbp7C4Kl/l1z5jaA4a0oOxzgibws9GjtIxZTZ6fyRKuOIlqwWaFxcC4x23idrBFjyde2csXFw==**/