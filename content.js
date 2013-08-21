(function() {
    document.addEventListener('keypress', openInBackground);

    function openInBackground(e) {
        if (!shortcutPressed(e)) return;

        var url = getUrl();
        if (!url) return;

        // send message to open a new tab in the background
        chrome.runtime.sendMessage({ action: 'openUrl', url: url});

    }

    function shortcutPressed(e) {
        return e.which === 66;
    }

    function getUrl() {
        var el = document.querySelector('#timeline .entryHolder a.entryTitle');
        return el.href;
    }
})();
