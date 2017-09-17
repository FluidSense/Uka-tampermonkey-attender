// ==UserScript==
// @name         UKABestiller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bestiller oktoberfestbilletter
// @author       Johannes Kvamme
// @match        https://uka.no/program/377-oktoberfest/377/billetter
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    new MutationObserver(function(mutations) {
    // check at least two H1 exist using the extremely fast getElementsByTagName
    // which is faster than enumerating all the added nodes in mutations
    if (document.getElementById('purchase-btn')) {
        document.getElementsByTagName('SELECT')[0].value = "4";document.getElementById('form_email').value = "test@gmail.com";document.getElementById('form_ccno').value="1122334455667788";document.getElementById('form_exp_month').value="01";document.getElementById('form_exp_year').value="18";document.getElementById('form_cvc2').value="010";document.getElementById('purchase-btn').click();
    }
}).observe(document, {childList: true, subtree: true});
// the above observes added/removed nodes on all descendants recursively
})();
