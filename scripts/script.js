console.log("hello");

//--------------------------------------- Constanten ---------------------------------------
const startKnop = document.querySelector("#knop");
const dierPlaatje = document.querySelector("#dierPlaatje");
const getalEl = document.querySelector("#getal");
const main = document.querySelector("main");

// --------------------------------------- Variablenen ---------------------------------------
let plaatjesArray = ['img/frame/vlieg.png','img/frame/kat.png','img/frame/dolfijn.png','img/frame/hond.png','img/frame/kip.png','img/frame/konijn.png','img/frame/olifant.png','img/frame/paard.png','img/frame/schaap.png','img/frame/schaap.png','img/frame/slang.png','img/frame/vogel.png'];
let plaatjesArrayFout = ['img/frame/dead/vlieg.png','img/frame/dead/kat.png','img/frame/dead/dolfijn.png','img/frame/dead/hond.png','img/frame/dead/kip.png','img/frame/dead/konijn.png','img/frame/dead/olifant.png','img/frame/dead/paard.png','img/frame/dead/schaap.png','img/frame/dead/schaap.png','img/frame/dead/slang.png','vogel.png'];
let randomDierNummer;
let secondsPassed = 0;
let getal = 0;

//--------------------------------------- Funtions ---------------------------------------

function startSpel() {
    randomDierNummer = Math.floor(Math.random()*11);
    console.log("random dier nummer: "+ randomDierNummer);
    dierPlaatje.src = plaatjesArray[randomDierNummer];
}

function mepDier() {
    dierPlaatje.src = plaatjesArrayFout[randomDierNummer];

    if (randomDierNummer == 0) {
        console.log("goed");
        document.main.classList.add("bgGoed");
    } else {
        console.log("fout");
        document.main.classList.add("bgFoutBody");
    }
}

startKnop.addEventListener("click", startSpel);
dierPlaatje.addEventListener("click", mepDier);

 /*function stop() {
    clearInterval(intervalId);
    let randomDierNummer = Math.floor(Math.random()*11);
    dierPlaatje.src = plaatjesArrayFout[randomDierNummer];
}


  if (randomDierNummer == plaatjesArray '0') {
        document.body.classList.add("goed");
        document.dierPlaatje("src=")
        getal += 1;
    }*/
//--------------------------------------- text content veranderingen ---------------------------------------

// --------------------------------------- uitvoering ---------------------------------------



