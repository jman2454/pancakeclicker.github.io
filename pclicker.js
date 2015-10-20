var cookies = 0;
var grandmas = 0;
var farms = 0;
var factories = 0;
var kitchens = 0;
var ihops = 0;
var gprice = 50;
var farmprice = 150;
var factoryprice = 500;
var kitchenprice = 1000;
var ihopprice = 10000;
var pps = 0;

function clickCookie() {
    cookies++;
    el = document.getElementById("message");
    el.innerHTML = Beautify(cookies);
}

function TitleUpdate() {
    document.title = "Pancake Clicker - " + cookies + " Pancakes";
}

function buyGrandma() {
    if (cookies >= gprice) {
        cookies -= gprice
        grandmas++
        gprice += 7
        pps += 1.7
        el = document.getElementById("grandmasale");
        el.innerHTML = grandmas;
        el = document.getElementById("message");
        el.innerHTML = Beautify(cookies);
        setInterval(function () {
            for (var i = 0; i < 1; i++) {
                cookies += 1
                el = document.getElementById("message");
                el.innerHTML = Beautify(cookies);
            }
        }, 1000);
    } else {}
}

function buyFarm() {
    if (cookies >= farmprice) {
        cookies -= farmprice
        farms++
        farmprice += 12
        pps += 3
        el = document.getElementById("farmsale");
        el.innerHTML = farms;
        el = document.getElementById("message");
        el.innerHTML = Beautify(cookies);
        setInterval(function () {
            for (var i = 0; i < 3; i++) {
                cookies += 1
                el = document.getElementById("message");
                el.innerHTML = Beautify(cookies);
            }
        }, 1000);
    } else {}
}

function buyFactory() {
    if (cookies >= factoryprice) {
        cookies -= factoryprice
        factories++
        factoryprice += 21
        pps += 5
        el = document.getElementById("factorysale");
        el.innerHTML = factories;
        el = document.getElementById("message");
        el.innerHTML = Beautify(cookies);
        setInterval(function () {
            for (var i = 0; i < 5; i++) {
                cookies += 1
                el = document.getElementById("message");
                el.innerHTML = Beautify(cookies);
            }
        }, 1000);
    } else {}
}

function buyKitchen() {
    if (cookies >= kitchenprice) {
        cookies -= kitchenprice
        kitchens++
        kitchenprice += 43
        pps += 8.3
        el = document.getElementById("kitchensale");
        el.innerHTML = kitchens;
        el = document.getElementById("message");
        el.innerHTML = Beautify(cookies);
        setInterval(function () {
            for (var i = 0; i < 8; i++) {
                cookies += 1
                el = document.getElementById("message");
                el.innerHTML = Beautify(cookies);
            }
        }, 1000);
    } else {}
}

function buyIhop() {
    if (cookies >= ihopprice) {
        cookies -= ihopprice
        ihops++;
        ihopprice += 67;
        pps += 100;
        el = document.getElementById("ihopsale");
        el.innerHTML = ihops;
        el = document.getElementById("message");
        el.innerHTML = Beautify(cookies);
        setInterval(function () {
            for (var i = 0; i < 100; i++) {
                cookies += 1
                el = document.getElementById("message");
                el.innerHTML = Beautify(cookies);
            }
        }, 1000);
    } else {}
}

function Beautify(what) //turns 9999999 into 9,999,999
{
    var str = '';
    what = Math.floor(what);
    what = (what + '').split('').reverse();
    for (var i in what) {
        if (i % 3 == 0 && i > 0) str = ',' + str;
        str = what[i] + str;
    }
    return str;
}
function show() { 
        if(document.getElementById('shop').style.display=='none') { 
            document.getElementById('shop').style.display='block'; 
        } 
        return false;
    } 
    function hide() { 
        if(document.getElementById('shop').style.display=='block') { 
            document.getElementById('shop').style.display='none'; 
        } 
        return false;
    }   