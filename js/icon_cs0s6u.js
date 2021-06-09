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
})()/** md5:2MKfT1CetL/nCV5kU2F2TM9xUVhRqzSbNGnslwB8PR3oG0RZSnR0FqBQqrdb7UqnYEYGkC6iTlixAYtH+sdcp/r7aNJR9UVqVxnxwDG9jXY3bBNHTcDfVpFsQnrIt9w91ksXwvrtwiWwn7iPiH1oN0CpWYNdymyfIhsfTd49+uJ5aJZdjRijrPe2SQoaIwuN**/