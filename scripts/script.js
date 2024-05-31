//--------------------------------------- Constanten ---------------------------------------
// HTML elementen
const startKnop = document.querySelector("#knop");
const dierPlaatje = document.querySelector("#dierPlaatje");
const getalEl = document.querySelector("#getal");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
// geluids effecten
const mepGeluid = document.querySelector("#mepGeluid"); //      Mep Geluid: Pixabay
const spelGeluid = document.querySelector("#spelGeluid"); //    Spel geluid: https://www.chosic.com/download-audio/39324/
const winGeluid = document.querySelector("#winGeluid"); //      Win geluid: Sound Effect from href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14800" Pixabay
const failGeluid = document.querySelector("#failGeluid"); //    Fail geluid:  href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=206498" UNIVERSFIELD from href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=206498" Pixabay 
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
// Start het spel! Laat verschillende dieren zien, behoud de orginele achtergrond, start slideshow.
function startSpel() {
    randomDierNummer = Math.floor(Math.random() * plaatjesArray.length);
    console.log("random dier nummer: " + randomDierNummer);
    dierPlaatje.src = plaatjesArray[randomDierNummer];
    resetBackgrounds();
    spelGeluid.play();
}

//Laat zien wat er gebeurd wanneer je op het dier mept.
function mepDier() {
    dierPlaatje.classList.add("mepAnimatie");
    snelheidsKnoppen.classList.toggle("hidden");
    clearInterval(intervalId); // Stop het interval
    intervalRunning = false;
    console.log(intervalId);
    dierPlaatje.src = plaatjesArrayFout[randomDierNummer];
    mepGeluid.play();
    //hoe kan ik ervoor zorgen dat de muziek stopt wanneer je op een dier slaat?: https://chatgpt.com/share/2f3cf7b7-6efd-4f40-8ba9-7f77a8243632
    spelGeluid.pause();

// Bron: Dobbelsteen oefening + lessen If Else
    if (randomDierNummer === 0) {
        console.log("goed");
        main.classList.add("bgGoed");
        footer.classList.add("bgGoedHF");
        header.classList.add("bgGoedHF");
        winGeluid.play();
        // Update de score
        getal++; //bron: ChatGTP: hoe kan ik deze tekst: Document.querySelector('p').tekst zorgen dat p een getal wordt, en elke keer dat het lukt, +1 bij komt. Dus in de browser zie je eerst '0'. En dan, als het goed is 1. En dan 2. etc: https://chatgpt.com/share/2c73fe97-05ef-40b7-a3ea-2fc5043b9b95
        aantalGemepteVliegen.textContent = getal;
    } else {
        console.log("fout");
        main.classList.add("bgFoutBody");
        footer.classList.add("bgFoutHF");
        header.classList.add("bgFoutHF");
        failGeluid.play();
    }
}

//Bron: Verwijderd toegevoegede achtergrond, wanneer je het dierplaatje mept.
function resetBackgrounds() {
    main.classList.remove("bgFoutBody", "bgGoed");
    footer.classList.remove("bgFoutHF", "bgGoedHF");
    header.classList.remove("bgFoutHF", "bgGoedHF");
}

//Bron: OK. Hoe kan ik ervoor zorgen, dat wanneer je op de knop 'volgende' drukt, de plaatjes vanzelf randrom worden af gespeelt, totdat je op het plaatje klikt. : https://chatgpt.com/share/2f3cf7b7-6efd-4f40-8ba9-7f77a8243632 + https://jsfiddle.net/721ajvhd/
function startAutoPlay() {
    console.log("interval running: " + intervalRunning);
    if (!intervalRunning) {
        intervalId = setInterval(startSpel, snelheid); // Verander elke seconde
        intervalRunning = true;
    }
    snelheidsKnoppen.classList.remove("hidden");
}

//Past moeilijkheids niveau aan van spel.
//Bron: Interval van de slideshow, verschillende dieren: Hoe kan ik ervoor zorgen, data de snelheid van de interval (slideshow) 2 second duurt wanneer je op de knop "makkelijk" drukt, 1 second per duur op de knop "normal" 0.75 seconds op de knop moeilijk en 0.5 seconde op de knop expert?: https://chatgpt.com/share/2f3cf7b7-6efd-4f40-8ba9-7f77a8243632 + Hulp van Lisette
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
    setMoeilijkheid(2000); // 2 secondonde
});
normaalKnop.addEventListener("click", function() {
    setMoeilijkheid(800); // 0.8 secondonde
});
moeilijkKnop.addEventListener("click", function() {
    setMoeilijkheid(500); // 0.5 secondonde
});
expertKnop.addEventListener("click", function() {
    setMoeilijkheid(250); // 0.25 secondonde
});


// Overige bronnen: https://chatgpt.com/share/2c73fe97-05ef-40b7-a3ea-2fc5043b9b95 niet alles gebruikt