import React from 'react'

function Chatbot() {
    (function(d, m){
        var kommunicateSettings = {"appId":"2e18f9e4921fa70a385a06b5bb3dc7401","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    return (
        <div>
            
        </div>
    )
}

export default Chatbot
