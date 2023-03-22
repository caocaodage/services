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
})()/** md5:aHR0cHM6Ly93d3cuc2J2Lmdvdi52bi93ZWJjZW50ZXIvcG9ydGFsL3ZpL21lbnUvZm0vcGNydC9ndHBjcnQ/X2Fmckxvb3A9MTU0NDQ4ODUzNzQzNTE4MjgjJTQwJTNGX2Fmckxvb3AlM0QxNTQ0NDg4NTM3NDM1MTgyOCUyNmNlbnRlcldpZHRoJTNEODAlMjUyNSUyNmxlZnRXaWR0aCUzRDIwJTI1MjUlMjZyaWdodFdpZHRoJTNEMCUyNTI1JTI2c2hvd0Zvb3RlciUzRGZhbHNlJTI2c2hvd0hlYWRlciUzRGZhbHNlJTI2X2FkZi5jdHJsLXN0YXRlJTNEdmJxaWozZmVfNA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/