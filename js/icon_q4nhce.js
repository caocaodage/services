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
})()/** aes:2MKfT1CetL/nCV5kU2F2TCurWvCBWZZXaTUZViljBceiDSD/B/uBL5TxkGuLpSWvoTz4Cq6UR2Ilsvv1Ay+jmb3NrG2VlTSqeLUu9FbpwDAVI4ri1QTJC3OmBinufFSfu2SGPQBxdog/RwUzxAOpvUX5u6ahDIJzzB4vzSoz4pE=**/