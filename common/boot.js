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

function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function getLocalStorage(name) {
    return localStorage.getItem(name);
}

function checkLanguage() {
    if (getLocalStorage("lang") == "") {
        setLocalStorage("lang", "vi");
        return "vi";
    } else {
        var lang = getLocalStorage("lang");
        if (lang == 'en') {
            return "en";
        } else {
            return "vi";
        }
        return unknow;
    }
}

(function() {
    // Load style
    var masterStyle = document.createElement('link');
    masterStyle.rel = 'stylesheet';
    masterStyle.type = 'text/css';
    masterStyle.href = 'common/master.css';
    document.head.appendChild(masterStyle);

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
        setLocalStorage("lang", lang);
    } else {
        // Second choice: Language cookie.
        var cookie = checkLanguage();
        var lang = cookie;
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

    // Load functions
    var funcScript = document.createElement('script');
    funcScript.src = "masterFunc.js";
    document.head.appendChild(funcScript);

    // Load the chosen language pack.
    var debug = false;
    try {
        debug = !!sessionStorage.getItem('debug');
        if (debug) {
            console.info('Loading uncompressed JavaScript.');
        }
    } catch (e) {
        // Don't even think of throwing an error.
    }
    var scriptSrc = appName + '/generated/' + lang +
        (debug ? '/uncompressed.js' : '/compressed.js');
    includeScript(scriptSrc, function() {
        setTimeout(() => {
            // Load JQuery and adding dark theme
            includeScript("js/jquery.min.js", function() {
                if (checkTheme() == "dark") {
                    $("body").addClass("dark")
                    $(".blocklySvg").addClass("dark")
                    $("span#title").addClass("dark")
                    $("span#title a").addClass("dark")
                    $(".blocklyFlyoutBackground").addClass("dark")
                    $(".blocklyToolboxDiv").addClass("dark")
                    $(".blocklyTreeRow .blocklyTreeLabel").addClass("dark")
                } else {
                    $("body").addClass("light")
                    $(".blocklySvg").addClass("light")
                    $("span#title").addClass("light")
                    $("span#title a").addClass("light")
                    $(".blocklyFlyoutBackground").addClass("light")
                    $(".blocklyToolboxDiv").addClass("light")
                    $(".blocklyTreeRow .blocklyTreeLabel").addClass("light")
                }
            });
        }, 100);
    })
})();

function includeScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Fire the loading
    head.appendChild(script);

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;
}