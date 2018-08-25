// ==UserScript==
// @version  1.0
// @name     Hide aliexpress, alibaba, pinterest images on Google image search
// @match    *://*/*
// @run-at   document-start
// @grant    none
// @noframes
// ==/UserScript==
(function () {
    'use strict';

    if (location.href.indexOf("https://www.google.") === 0) {
        function hideImages() {
            var els = document.getElementsByClassName("rg_ilmbg");

            [].forEach.call(els, function(el) {
                var t = el.innerText;

                if (t.includes('aliexpress') || t.includes('alibaba') || t.includes('pinterest')) {
                    //el.parentElement.parentElement.style.border='3px solid red';
                    el.parentElement.parentElement.style.visibility = 'hidden';
                }
            });

        }
        window.addEventListener('readystatechange', hideImages, true);
        window.addEventListener('spfdone', hideImages);
    }
}());
