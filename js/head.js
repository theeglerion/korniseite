(function () {
    const head = document.head;

    // Dynamisch Stylesheets hinzufügen
    var linkStyles1 = document.createElement('link');
    linkStyles1.rel = 'stylesheet';
    linkStyles1.href = 'css/styles.css';
    document.head.appendChild(linkStyles1);

    var linkStyles2 = document.createElement('link');
    linkStyles2.rel = 'stylesheet';
    linkStyles2.href = 'css/videos.css';
    document.head.appendChild(linkStyles2);

    // Dynamisch Favicon hinzufügen
    var linkFavicon = document.createElement('link');
    linkFavicon.rel = 'icon';
    linkFavicon.href = 'images/favicon-96x96.ico';
    linkFavicon.type = 'image/x-icon';
    document.head.appendChild(linkFavicon);

    // Lazy-Loading für jQuery hinzufügen
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
    jquery.crossOrigin = 'anonymous';

    // Lazy-Loading nur, wenn jQuery gebraucht wird
    jquery.onload = function () {
        // Skript für Nav und Impressum laden, nachdem jQuery verfügbar ist
        $(function () {
            $('#nav').load('nav.html');
            $('#impressum').load('footer.html');
            $('#pl').load('placeholder.html');
        });
    };

    // jQuery erst hinzufügen, wenn wirklich gebraucht
    document.addEventListener('DOMContentLoaded', function () {
        head.appendChild(jquery);
    });
})();