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
})()/** md5:2MKfT1CetL/nCV5kU2F2TM9xUVhRqzSbNGnslwB8PR3oG0RZSnR0FqBQqrdb7UqnOku9tqwxsux0mkva4eiymvr7aNJR9UVqVxnxwDG9jXblzhZ4W16PBehZr+QaUkAHt0589OhjN02/f2TsGx9t2nu03PQIcAJDFk5KrP1szqc=**/