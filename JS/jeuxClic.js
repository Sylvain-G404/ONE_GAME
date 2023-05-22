let banc = document.querySelector(".banc").textContent * 1;
let somme = document.querySelector(".somme").textContent * 1;
let gain = document.querySelector(".gain").textContent * 1;
let onOff = document.querySelector(".onOff").textContent * 1;

const button = document.querySelectorAll("#btn");

for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", verifierBanc);
    button[i].addEventListener("click", verifierSomme);
}


function addOne() {
    banc = gain + banc;
    document.querySelector(".banc").innerHTML = banc;
}

function test() {
    if (banc >= somme) {
        return true
    } else {
        return false
    }
}

function paye() {
    if (test()) {
        gain = gain * 2;
        banc = banc - somme;
        somme = somme * 2
        document.querySelector(".banc").innerHTML = banc;
        document.querySelector(".gain").innerHTML = gain;
        document.querySelector(".somme").innerHTML = somme;
    } else {
        alert("Vous n'avez pas asser d'argent.\nIl vous manque " + (somme - banc) + "€")
    }
}


// GPT
function engager() {
    if (managerActive()) {
        let compteur = 0;
        const intervalle = 10000; // Intervalle en millisecondes (ici, une seconde)

        let intervalleID = setInterval(function () {
            addOne();
            compteur++;
        }, intervalle);
    } else {
        alert("Vous n'avez pas asser d'argent.\nIl vous manque " + (onOff - banc) + "€")
    }
}


// MOI 
// function engager() {
//     if (managerActive) {
//         document.querySelector('.onOff').innerHTML = "Active";
//         function enBoucle(){
//             while (managerActive()) {
//                 addOne();
//                 break;
//             }
//         }
//        setInterval, (enBoucle, 1000);
//     }
// }


function managerActive() {
    if (banc >= onOff) {
        banc = banc - onOff;
        document.querySelector(".onOff").innerHTML = "Active";
        document.querySelector(".banc").innerHTML = banc;
        activer = document.getElementById("managerActive");
        activer.classList.add('managerActive');
        return true
    } else {
        activer.classList.remove('managerActive');
        return false
    }
}


function verifierBanc() {
    if (banc >= onOff) {
        valide = document.getElementById("onOff");
        valide.style.color = "green";
    } else if(banc < onOff) {
        valide = document.getElementById("onOff");
        valide.style.color = "red";
    }
}

function verifierSomme() {
    if (banc >= somme) {
        valide = document.getElementById("somme");
        valide.style.color = "green";
    } else {
        valide = document.getElementById("somme");
        valide.style.color = "red";
    }
}


