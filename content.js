(function() {
    $(function() {
        $(document).keypress(openInBackground);
    });

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
        var el = $('#timeline .entryHolder a.entryTitle');
        var url = el.attr('href');
        return url;
    }
})();
