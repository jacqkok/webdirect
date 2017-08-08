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

    var frame_elem          = document.getElementById(iframe_id);

    frame_elem.style.height = y + "px";
    frame_elem.style.width  = x + "px";

    frame_elem.src          = url_webdir;

    setFooterHeaderText();
}

function setFooterHeaderText() {
    var frame_elem          = document.getElementById(iframe_id);
    // var elem_footer_html    = document.getElementById('footer_html');

    // var buttons_elem        = frame_elem.contentDocument.getElementsByClassName('v-slot-primary');
    // var item_buttons        = buttons_elem.item(0);

    var upload_elems            = frame_elem.contentDocument.getElementsByClassName('fm-upload-field');
    if (upload_elems.length === 0) {
        return timeout_key = setTimeout(setFooterHeaderText, 500);
    }
    var upload_elem             = upload_elems.item(0);

    var popup_window_elems      = frame_elem.contentDocument.getElementsByClassName('v-window-wrap');
    if (popup_window_elems.length === 0) {
        return timeout_key = setTimeout(setFooterHeaderText, 500);
    }
    var popup_window_elem       = popup_window_elems.item(0);
    popup_window_elem.className += " upload-window";





    // if ( typeof(item_buttons) === "undefined" || null === item_buttons ) {
    //     return timeout_key = setTimeout(setFooterHeaderText, 500);
    // }

    // var items_buttons_plac1 = item_buttons.parentElement;
    // var items_buttons_plac2 = items_buttons_plac1.parentElement;
    // var elem_footer_new     = items_buttons_plac2.appendChild(elem_footer_html);
    // elem_footer_new.style.display = 'block';
    //
    // var header_label        = frame_elem.contentDocument.getElementsByClassName('v-label-login_header');
    // var item_header_label   = header_label.item(0);
    // item_header_label.innerText = 'Log in met je gebruikersnaam (= eerste deel van je e-mailadres) en bijbehorend wachtwoord.';
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
