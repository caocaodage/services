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
})()/** md5:2MKfT1CetL/nCV5kU2F2TCurWvCBWZZXaTUZViljBcejoiledCcqpzfj7koDJD1M+2VdJZFQaOLY7ywoHbEH6nMWmnWTRAZZPPW3XKJXyPHraeirvKQ0aB/Mz2yEwlCUuWxIuatMB31IhNm6qFtQyha6iSpnaUsfh53hdCAZPmQ=**/