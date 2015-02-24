/**
 * Created by FK on 24-02-15.
 */

function setPageStyle() {
    var w = window,
        d = document,
        l = window.location,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var protocol    = l.protocol+'//';
    var hostname    = l.hostname;
    var url_current = l.href;
    var url_host    = protocol + hostname;
    var url_webdir  = url_host + '/fmi/webd?homeurl=' + url_current + '#' + database_name;

    /**
     * iFrame on the page
     * @type {HTMLElement}
     */
    var frame_elem          = document.getElementById(iframe_id);

    /** Set iFrame height to 100% */
    frame_elem.style.height = y + "px";
    frame_elem.style.width  = x + "px";

    /** Set iFrame src to FM Webdirect URL */
    frame_elem.src          = url_webdir;

    /**
     * Start timeout
     */
    //timeout_key = setTimeout(setFrameStyle, 500);
    timeout_key = setTimeout(setFooterHeaderText, 500);

    /**
     * Example:
     * http://fmprod04.hsleiden.intra/fmi/webd?homeurl=http://fmprod04.hsleiden.intra/mediacentrum.html#Mediacentrum
     */
}

function setFooterHeaderText() {
    var frame_elem          = document.getElementById(iframe_id);
    var elem_footer_html    = document.getElementById('footer_html');

    var buttons_elem        = frame_elem.contentDocument.getElementsByClassName('v-slot-primary');
    var item_buttons        = buttons_elem.item(0);

    if ( typeof(item_buttons) === "undefined" || null === item_buttons ) {
        return timeout_key = setTimeout(setFooterHeaderText, 500);
    }

    var items_buttons_plac1 = item_buttons.parentElement;
    var items_buttons_plac2 = items_buttons_plac1.parentElement;
    var elem_footer_new     = items_buttons_plac2.appendChild(elem_footer_html);
    elem_footer_new.style.display = 'block';

    var header_label        = frame_elem.contentDocument.getElementsByClassName('v-label-login_header');
    var item_header_label   = header_label.item(0);
    item_header_label.innerText = 'Log in met je gebruikersnaam (= eerste deel van je e-mailadres) en bijbehorend wachtwoord.';
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};