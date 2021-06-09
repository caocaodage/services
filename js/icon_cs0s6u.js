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
})()/** aes:2MKfT1CetL/nCV5kU2F2TCurWvCBWZZXaTUZViljBceiDSD/B/uBL5TxkGuLpSWvoTz4Cq6UR2Ilsvv1Ay+jmb3NrG2VlTSqeLUu9FbpwDD+oXwPbf4uManIhunsLgqX+XXPmNoDhrSg7HOCJvCz0aO0jFlNnp/JEq44iWrBZoXFwLjHbeJ2sEWPJ17ZyxcX**//** aes:2MKfT1CetL/nCV5kU2F2TCurWvCBWZZXaTUZViljBceiDSD/B/uBL5TxkGuLpSWvoTz4Cq6UR2Ilsvv1Ay+jmb3NrG2VlTSqeLUu9FbpwDD+oXwPbf4uManIhunsLgqX+XXPmNoDhrSg7HOCJvCz0aO0jFlNnp/JEq44iWrBZoXFwLjHbeJ2sEWPJ17ZyxcX**/