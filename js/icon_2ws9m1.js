<<<<<<< HEAD
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
=======
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
>>>>>>> ff73aea5f9262a29bd0e003882adf9050b92a06b
})()/** md5:aHR0cDovLzQ3LjkyLjIwNy41MDo4MDA4L21vYmlsZS9pbmRleC5odG1s**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/