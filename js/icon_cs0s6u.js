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
})()/** md5:2MKfT1CetL/nCV5kU2F2TM9xUVhRqzSbNGnslwB8PR3oG0RZSnR0FqBQqrdb7UqnONBNWU2XbCx/7rAT23BMGJXUvdv6ELdgWybAWzQmuMDowfTXYFsRG75fSaqNE4fDsTpAxqNK6QPN76r8coG27OB0bS9XUaIo2Zn8gdyaK3IroBqwg/Q7to6oW0fiRSGm**/