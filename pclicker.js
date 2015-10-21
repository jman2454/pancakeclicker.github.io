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
var lastTime = new Date().getTime();
var tp = 0;

function clickCookie() {
    tp++;
    el = document.getElementById("message");
    el.innerHTML = Beautify(tp);
}

function TitleUpdate() {
    document.title = "Pancake Clicker - " + tp + " Pancakes";
}

function buyGrandma() {
    if (tp >= gprice) {
        tp -= gprice;
        grandmas++;
        gprice *= 1.2;
        pps += 1.7;
        el = document.getElementById("grandmasale");
        el.innerHTML = grandmas;
    } else {}
}

function buyFarm() {
    if (tp >= farmprice) {
        tp -= farmprice;
        farms++;
        farmprice *= 1.3;
        pps += 3;
        el = document.getElementById("farmsale");
        el.innerHTML = farms;
    } else {}
}

function buyFactory() {
    if (tp >= factoryprice) {
        tp -= factoryprice;
        factories++;
        factoryprice *= 1.5;
        pps += 5;
        el = document.getElementById("factorysale");
        el.innerHTML = factories;
    } else {}
}

function buyKitchen() {
    if (tp >= kitchenprice) {
        tp -= kitchenprice;
        kitchens++;
        kitchenprice *= 1.7;
        pps += 8.3;
        el = document.getElementById("kitchensale");
        el.innerHTML = kitchens;
    } else {}
}

function buyIhop() {
    if (tp >= ihopprice) {
        tp -= ihopprice;
        ihops++;
        ihopprice *= 2;
        pps += 100;
        el = document.getElementById("ihopsale");
        el.innerHTML = ihops;
    } else {}
}

function Beautify(what) //turns 9999999 into 9,999,999
{
    var str = '';
    what = Math.floor(what);
    what = (what + '').split('').reverse();
    for (var i in what) {
        if (i % 3 === 0 && i > 0) str = ',' + str;
        str = what[i] + str;
    }
    return str;
}

setInterval(function () {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - lastTime;

  lastTime = currentTime;
  
  tp += (pps * (elapsedTime / 1000)); // elapsedTime is in milliseconds, divide by 1000 to get fractional seconds
  
  document.getElementById('message').innerText = Math.floor(tp);
  
  
}, 10);