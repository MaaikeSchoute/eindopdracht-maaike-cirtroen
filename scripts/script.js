console.log("hello");

//--------------------------------------- Constanten ---------------------------------------
// HTML elementen
const startKnop = document.querySelector("#knop");
const dierPlaatje = document.querySelector("#dierPlaatje");
const getalEl = document.querySelector("#getal");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
// geluids effecten
const mepGeluid = document.querySelector("#mepGeluid");
const spelGeluid = document.querySelector("#spelGeluid");
const winGeluid = document.querySelector("#winGeluid");
const failGeluid = document.querySelector("#failGeluid");
// sneleheidsknoppen
const makkelijkKnop = document.querySelector("#makkelijk");
const normaalKnop = document.querySelector("#normaal");
const moeilijkKnop = document.querySelector("#moeilijk");
const expertKnop = document.querySelector("#expert");
const snelheidsKnoppen = document.querySelector("#snelheidsKnoppen");

// --------------------------------------- Variabelen ---------------------------------------
let plaatjesArray = ['img/frame/vlieg.png','img/frame/kat.png','img/frame/dolfijn.png','img/frame/hond.png','img/frame/kip.png','img/frame/konijn.png','img/frame/olifant.png','img/frame/paard.png','img/frame/schaap.png','img/frame/schaap.png','img/frame/slang.png','img/frame/vogel.png'];
let plaatjesArrayFout = ['img/frame/dead/vlieg.png','img/frame/dead/kat.png','img/frame/dead/dolfijn.png','img/frame/dead/hond.png','img/frame/dead/kip.png','img/frame/dead/konijn.png','img/frame/dead/olifant.png','img/frame/dead/paard.png','img/frame/dead/schaap.png','img/frame/dead/schaap.png','img/frame/dead/slang.png','img/frame/dead/vogel.png'];
let randomDierNummer;
let getal = 0;
let aantalGemepteVliegen = document.querySelector("#getal");
let intervalId;
let intervalRunning = false;
let snelheid = 1000;

//--------------------------------------- Functies ---------------------------------------

//Start het spel! Laat verschillende dieren zien, behoud de orginele achtergrond, start slideshow.
function startSpel() {
    randomDierNummer = Math.floor(Math.random() * plaatjesArray.length);
    console.log("random dier nummer: " + randomDierNummer);
    dierPlaatje.src = plaatjesArray[randomDierNummer];
    resetBackgrounds();
    spelGeluid.play();
}

//Laat zien wat er gebeurd wanneer je op het dier mept.
function mepDier() {
    snelheidsKnoppen.classList.toggle("hidden");
    clearInterval(intervalId); // Stop het interval
    intervalRunning = false;
    console.log(intervalId);
    dierPlaatje.src = plaatjesArrayFout[randomDierNummer];
    mepGeluid.play();
    spelGeluid.pause();
    dierPlaatje.classList.add("mepAnimatie");

    if (randomDierNummer === 0) {
        console.log("goed");
        main.classList.add("bgGoed");
        footer.classList.add("bgGoedHF");
        header.classList.add("bgGoedHF");
        winGeluid.play();

        // Update de score
        getal++;
        aantalGemepteVliegen.textContent = getal;
    } else {
        console.log("fout");
        main.classList.add("bgFoutBody");
        footer.classList.add("bgFoutHF");
        header.classList.add("bgFoutHF");
        failGeluid.play();
    }
}

//Verwijderd toegevoegede achtergrond, wanneer je het dierplaatje mept.
function resetBackgrounds() {
    main.classList.remove("bgFoutBody", "bgGoed");
    footer.classList.remove("bgFoutHF", "bgGoedHF");
    header.classList.remove("bgFoutHF", "bgGoedHF");
}

//Interval van de slideshow, verschillende dieren
function startAutoPlay() {
    console.log("interval running: " + intervalRunning);
    if (!intervalRunning) {
        intervalId = setInterval(startSpel, snelheid); // Verander elke seconde
        intervalRunning = true;
    }
}

//Past moeilijkheids niveau aan van spel
function setMoeilijkheid(niveau) {
    snelheid = niveau;
    console.log("niveau: " + snelheid);
    clearInterval(intervalId);
    intervalRunning = false;
    startAutoPlay();
}

//--------------------------------------- Event Listeners ---------------------------------------
// Knop "Volgend dier"
startKnop.addEventListener("click", function() {
    startAutoPlay();
});
dierPlaatje.addEventListener("click", mepDier);

//moeilijkheidsknoppen
makkelijkKnop.addEventListener("click", function() {
    setMoeilijkheid(2000); // 2 seconds
});
normaalKnop.addEventListener("click", function() {
    setMoeilijkheid(1000); // 1 second
});
moeilijkKnop.addEventListener("click", function() {
    setMoeilijkheid(750); // 0.75 seconds
});
expertKnop.addEventListener("click", function() {
    setMoeilijkheid(500); // 0.5 seconds
});
