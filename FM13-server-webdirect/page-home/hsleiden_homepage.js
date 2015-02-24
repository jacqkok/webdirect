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
    timeout_key = setTimeout(setFrameStyle, 500);


    /**
     * Example:
     * http://fmprod04.hsleiden.intra/fmi/webd?homeurl=http://fmprod04.hsleiden.intra/mediacentrum.html#Mediacentrum
     */
}

function setFrameStyle() {
    var frame_elem          = document.getElementById(iframe_id);
    var login_elem_shadow   = frame_elem.contentDocument.getElementsByClassName('v-shadow-window');
    var login_elem_wrap     = frame_elem.contentDocument.getElementsByClassName('v-window');

    var maximize_elem       = frame_elem.contentDocument.getElementsByClassName('v-window-maximizebox');

    var item_login_shadow   = login_elem_shadow.item(0);
    var item_login_wrap     = login_elem_wrap.item(0);

    if ( typeof(item_login_shadow) === "undefined" || null === item_login_shadow ) {
        return timeout_key = setTimeout(setFrameStyle, 500);
    }

    if ( item_login_shadow.hasAttributes('style') ) {
        var pos_left_raw    = item_login_shadow.style.left;
        var pos_left_str    = pos_left_raw.replace("px", "");
        var pos_left        = parseFloat(pos_left_str);



        /**
         * Original element width:  400px
         * New element width:       721px
         */
        var width_original  = 400;
        var width_new       = 721;
        var pos_left_dif    = (width_new - width_original);
        var pos_left_new    = pos_left - (pos_left_dif / 2);

        /**
         * Set left positions 2 elements
         */
        item_login_shadow.style.left    = pos_left_new + "px";
        item_login_wrap.style.left   = pos_left_new + "px";

        var w = window,
            d = document,
            l = window.location,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        var frame_body = frame_elem.contentDocument.getElementsByClassName('v-generated-body');
        var item_frame_body = frame_body.item(0);

        item_frame_body.style.width = x + "px";

    } else {
        /**
         * Loop again
         */
        return timeout_key = setTimeout(setFrameStyle, 500);
    }
}