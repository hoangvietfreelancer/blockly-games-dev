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
    setLocalStorage(cname, cvalue)
}

function getCookie(cname) {
    return getLocalStorage(cname)
}

function getLocalStorage(name) {
    return localStorage.getItem(name);
}

function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
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
    if (getLocalStorage("lang") == "") {
        setLocalStorage("lang", "vi");
        return "vi";
    } else {
        lang = getLocalStorage("lang");
        if (lang == 'en') {
            return "en";
        } else {
            return "vi";
        }
        return unknow;
    }
}

function checkTheme() {
    if (getLocalStorage("theme") == "") {
        setLocalStorage("theme", "light");
        return "light";
    } else {
        if (getLocalStorage("theme") == 'dark') {
            return "dark";
        } else {
            return "light";
        }
        return unknow;
    }
}

function checkModalShow() {
    if (getLocalStorage("modal") == "") {
        setLocalStorage("modal", "true");
        return true;
    } else {
        modal = getLocalStorage("modal");
        if (modal == 'true') {
            return true;
        } else {
            return false;
        }
        return unknow;
    }
}

function loadStatus() {
    window.location.href = 'status.html';
}

function clearDataButtonShow() {
    if (checkExitsData() > 0) {
        $("#clearDataPara").css("display", "block");
    }
}

function changeTheme() {
    if (checkTheme() == "dark") {
        delCookie('theme');
        setLocalStorage('theme', 'light');
    } else {
        delCookie('theme');
        setLocalStorage('theme', 'dark');
    }
    location.reload();
}

function changeLang(lang) {
    delCookie('lang');
    setLocalStorage('lang', 'en');
    location.reload();
}