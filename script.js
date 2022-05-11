// Valeur Global de départ
let minute = 1;
let manaMax = 30;
let actualMana = 0;
let maxprogress = 100;
let actualprogress = 0;
let itv = 1;

// Fonction sur la bar de temps de stream
function setLiveTime(value) {
    minute = value
}

function clearBar() {
    let progressnum = document.getElementById("progressnum");
    let indicator = document.getElementById("indicator");
    indicator.style.width="0px";

    progressnum.innerHTML = '100 %';
    maxprogress = 100;
    actualprogress = 0
    clearInterval(itv)

    document.getElementById("start").value = "COMMENCER";
    document.getElementById("start").style.backgroundColor = null;
    document.getElementById("start").style.opacity = 1;
    document.getElementById("start").style.cursor = null;
    document.getElementById("stop").style.display = "none";
}

function prog() {
    if(actualprogress >= maxprogress) {
        clearInterval(itv);
        return;
    } else {
        document.getElementById("start").value = "EN COURS";
        document.getElementById("start").style.backgroundColor = "orange";
        document.getElementById("start").style.opacity = 0.6;
        document.getElementById("start").style.cursor = 'not-allowed';
        document.getElementById("stop").style.backgroundColor = "hotpink";
        document.getElementById("stop").style.display = "inline";
    }

    let progressnum = document.getElementById("progressnum");
    let indicator = document.getElementById("indicator");
    actualprogress += 1;

    indicator.style.width=actualprogress * (250/maxprogress) + "px";
    progressnum.innerHTML = 100 - actualprogress + ' %';

    /* if (actualprogress === 100) {
        progressnum.innerHTML = 100 - actualprogress + ' % 👎';
    } else if (actualprogress > 25 && actualprogress < 100) {
        progressnum.innerHTML = 100 - actualprogress + ' % exemple';
    } else {
        progressnum.innerHTML = 100 - actualprogress + ' % 👍';
    } */

    if(actualprogress === maxprogress) clearInterval(itv);
}

function changeBGLive(value) {
    let progressnum = document.getElementById("progressnum");
    let indicator = document.getElementById("indicator");
    indicator.style.backgroundColor=value;
    value === 'white' ? progressnum.style.color="black" : progressnum.style.color="white";
}

function changeBGLiveFond(value) {
    let progressbar = document.getElementById("progressbar");
    progressbar.style.backgroundImage=`url('${value}')`;
}

function clearIntervalITV() {
    clearInterval(itv);
    document.getElementById("start").value = "REPRENDRE";
    document.getElementById("start").style.backgroundColor = "orange";
    document.getElementById("start").style.opacity = 1;
    document.getElementById("start").style.cursor = null;
    document.getElementById("stop").style.backgroundColor = null;
    document.getElementById("stop").style.display = "none";
}

// Fonction sur la Bar de mana ( Private Show )
function resetMax() {
    let bar = document.getElementById("bar1")
    bar.value = 0;
    bar.max = manaMax;
    actualMana = 0;
}

function change(i) {
    let bar = document.getElementById("bar1")
    bar.value = actualMana + i;
    actualMana += i;
}

function setManaTime(value) {
    let bar = document.getElementById("bar1")
    bar.max = value;
    manaMax = value;
}

function changeManaTime(value) {
    let indicator = document.getElementById("bar1");
    indicator.style.backgroundImage=`url('${value}')`;
}