var gameNames = "puzzle maze bird turtle movie music pond-tutor pond-duck".split(" ");
function deleteData() {
    var a, b;
    if (checkLanguage() === "en") {
        if (confirm("Are you sure?")) {
            for (a = 0; a < gameNames.length; a++) {
                for (b = 1; 10 >= b; b++) {
                    delete window.localStorage[gameNames[a] + b];
                }
            }
            location.reload();
        }
    } else {
        if (confirm("Bạn có chắc chắn?")) {
            for (a = 0; a < gameNames.length; a++) {
                for (b = 1; 10 >= b; b++) {
                    delete window.localStorage[gameNames[a] + b];
                }
            }
            location.reload();
        }
    }

}

function delCookie(cname) {
    var expires = "expires=" + 'Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); } }
    return "";
}

function checkExitsData() {
    var exits = 0;
    for (a = 0; a < gameNames.length; a++) {
        for (b = 1; 10 >= b; b++) {
            if (localStorage.getItem(gameNames[a] + b) !== null) {
                exits++;
            }
        }
    }
    return exits;
}

function checkLanguage() {
    if (getCookie("lang") == "") {
        setCookie("lang", "vi", 365);
        return "vi";
    } else {
        lang = getCookie("lang");
        if (lang == 'en') {
            return "en";
        } else {
            return "vi";
        }
        return unknow;
    }
}
function checkTheme() {
    if (getCookie("theme") == "") {
        setCookie("theme", "light", 365);
        return "light";
    } else {
        theme = getCookie("theme");
        if (theme == 'dark') {
            return "dark";
        } else {
            return "light";
        }
        return unknow;
    }
}

function checkModalShow() {
    if (getCookie("modal") == "") {
        setCookie("modal", "true", 365);
        return true;
    } else {
        modal = getCookie("modal");
        if (modal == 'true') {
            return true;
        } else {
            return false;
        }
        return unknow;
    }
}

function loadStatus() {
    window.location.href='status.html';
}

function clearDataButtonShow() {
    if (checkExitsData() > 0) {
        $("#clearDataPara").css("display", "block");
    }
}
function changeTheme() {
    if (checkTheme() == "dark") {
        delCookie('theme');
        setCookie('theme', 'light', 365);
    } else {
        delCookie('theme');
        setCookie('theme', 'dark', 365);
    }
    location.reload();
}