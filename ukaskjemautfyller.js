// ==UserScript==
// @name         UKABestiller
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bestiller oktoberfestbilletter
// @author       Johannes Kvamme
// @match        https://uka.no/program/377-oktoberfest/377/billetter
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    new MutationObserver(function(mutations) {
    // Checks for a purchase button by ID before executing, to prevent script-run before all fields are available.
    if (document.getElementById('purchase-btn')) {
        document.getElementsByTagName('SELECT')[0].value = "4";document.getElementById('form_email').value = "test@gmail.com";document.getElementById('form_ccno').value="1122334455667788";document.getElementById('form_exp_month').value="01";document.getElementById('form_exp_year').value="18";document.getElementById('form_cvc2').value="010";document.getElementById('purchase-btn').click();
    }
}).observe(document, {childList: true, subtree: true});
// the above observes added/removed nodes on all descendants recursively
})();
