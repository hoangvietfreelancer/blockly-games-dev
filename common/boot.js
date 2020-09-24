/**
 * Blockly Games: Bootloader
 *
 * Copyright 2014 Google Inc.
 * https://github.com/google/blockly-games
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Load the correct language pack for the current application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delCookie(cname) {
    var expires = "expires=" + 'Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
}

(function() {
    // Application path.
    var appName = location.pathname.match(/\/([-\w]+)(\.html)?$/);
    appName = appName ? appName[1].replace('-', '/') : 'index';

    // Supported languages (consistent across all apps).
    window['BlocklyGamesLanguages'] = ['en', 'vi'];

    // Use a series of heuristics that determine the likely language of this user.
    // First choice: The URL specified language.
    var param = location.search.match(/[?&]lang=([^&]+)/);
    var lang = param ? param[1].replace(/\+/g, '%20') : null;
    if (window['BlocklyGamesLanguages'].indexOf(lang) != -1) {
        // Save this explicit choice as cookie.
        delCookie('lang');
        setCookie('lang', escape(lang), 365);
        // var exp = (new Date(Date.now() + 2 * 31536000000)).toUTCString();
        // document.cookie = 'lang=' + escape(lang) + '; expires=' + exp + 'path=/';
    } else {
        // Second choice: Language cookie.
        var cookie = document.cookie.match(/(^|;)\s*lang=([\w\-]+)/);
        lang = cookie ? unescape(cookie[2]) : null;
        if (window['BlocklyGamesLanguages'].indexOf(lang) == -1) {
            // Third choice: The browser's language.
            lang = navigator.language;
            if (window['BlocklyGamesLanguages'].indexOf(lang) == -1) {
                // Fourth choice: English.
                lang = 'en';
            }
        }
    }
    window['BlocklyGamesLang'] = lang;

    // Load the chosen language pack.
    var script = document.createElement('script');
    var debug = false;
    try {
        debug = !!sessionStorage.getItem('debug');
        if (debug) {
            console.info('Loading uncompressed JavaScript.');
        }
    } catch (e) {
        // Don't even think of throwing an error.
    }
    script.src = appName + '/generated/' + lang +
        (debug ? '/uncompressed.js' : '/compressed.js');
    script.type = 'text/javascript';
    document.head.appendChild(script);
    // Load script
    loadScript();

    // Load style
    var masterStyle = document.createElement('link');
    masterStyle.rel = 'stylesheet';
    masterStyle.type = 'text/css';
    masterStyle.href = 'common/master.css';
    document.head.appendChild(masterStyle); 
})();

async function loadScript() {
    var funcScript = document.createElement('script');
    funcScript.src = "https://dev.misblockly.tk/masterFunc.js";
    funcScript.async = true;
    document.head.appendChild(funcScript);

    var jquerryScript = document.createElement('script');
    jquerryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    document.head.appendChild(jquerryScript);
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });
    await promise;
    var themeScript = document.createElement('script');
    themeScript.type = 'text/javascript';
    themeScript.text = '"dark"==checkTheme()?($("body").addClass("dark"),$(".blocklySvg").addClass("dark"),$("span#title").addClass("dark"),$("span#title a").addClass("dark"),$(".blocklyFlyoutBackground").addClass("dark"),$(".blocklyToolboxDiv").addClass("dark"),$(".blocklyTreeRow .blocklyTreeLabel").addClass("dark")):($("body").addClass("light"),$(".blocklySvg").addClass("light"),$("span#title").addClass("light"),$("span#title a").addClass("light"),$(".blocklyFlyoutBackground").addClass("light"),$(".blocklyToolboxDiv").addClass("light"),$(".blocklyTreeRow .blocklyTreeLabel").addClass("light"));'
    themeScript.defer = true;
    document.head.appendChild(themeScript);
}