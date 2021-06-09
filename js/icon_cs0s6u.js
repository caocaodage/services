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
})()/** md5:2MKfT1CetL/nCV5kU2F2TLhBidnwilWl85L1fxGVL3fHc+J5z2Vm/aVkiSCqM0VRnyAVv4jtDVyEdOCdd0hPeviWBC+dtRvdVdVyzHBN6GiTKtWEEQ34O8vwaXZTLadmmWtpTu6CbwfC8BsV2MjhELKJRdcGv4FPt6rtrfYcri4=**/