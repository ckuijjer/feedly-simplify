(function() {
    chrome.runtime.onMessage.addListener(actionListener);

    function actionListener(request, sender, sendResponse) {
        if (request.action = 'openUrl') {
            openUrl(request.url);
        }
    }

    function openUrl(url) {
        chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function(tabArray) {
                var tab = tabArray[0];

                var options = {
                    'url': url,
                    'active': false
                };

                if (tab) {
                    options.index = tab.index + 1
                }

                chrome.tabs.create(options);
            });
    }
})();
