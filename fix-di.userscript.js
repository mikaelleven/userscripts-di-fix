// ==UserScript==
// @name         DI++
// @version      0.2
// @description  Unlocks DI Plus articles and amends som visual issues
// @description  >> Download Tampermonkey to your favourite browser to enable this script: https://tampermonkey.net/ <<
// @author       Mikael Levén
// @namespace    http://labs.leven.se/
// @downloadURL  https://raw.githubusercontent.com/mikaelleven/userscripts-di-fix/master/fix-di.userscript.js
// @match        https://www.di.se/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	// Disable paywall
	GM_addStyle ('#paywall-container { display:none; }');
	GM_addStyle ('.paywall-content { height:auto!important; overflow:auto!important; }');
	GM_addStyle ('.content-holder DIV { background:none!important; }');

	// Remove the big bulky header, a top menu is enough
	GM_addStyle ('.di_header { display:none!important; }');

	// Remove empty elements when using a ad-blocker
	GM_addStyle ('.ad_container { display:none!important; }');

})();