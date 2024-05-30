console.log("hello");

//--------------------------------------- Constanten ---------------------------------------
const startKnop = document.querySelector("#knop");
const dierPlaatje = document.querySelector("#dierPlaatje");
const getalEl = document.querySelector("#getal");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const mepGeluid = document.querySelector("#mepGeluid");
const spelGeluid = document.querySelector("#spelGeluid")

// --------------------------------------- Variabelen ---------------------------------------
let plaatjesArray = ['img/frame/vlieg.png','img/frame/kat.png','img/frame/dolfijn.png','img/frame/hond.png','img/frame/kip.png','img/frame/konijn.png','img/frame/olifant.png','img/frame/paard.png','img/frame/schaap.png','img/frame/schaap.png','img/frame/slang.png','img/frame/vogel.png'];
let plaatjesArrayFout = ['img/frame/dead/vlieg.png','img/frame/dead/kat.png','img/frame/dead/dolfijn.png','img/frame/dead/hond.png','img/frame/dead/kip.png','img/frame/dead/konijn.png','img/frame/dead/olifant.png','img/frame/dead/paard.png','img/frame/dead/schaap.png','img/frame/dead/schaap.png','img/frame/dead/slang.png','img/frame/dead/vogel.png'];
let randomDierNummer;
let getal = 0;
let aantalGemepteVliegen = document.querySelector("#getal");
let intervalId;
let intervalRunning = false;

//--------------------------------------- Functies ---------------------------------------
function startSpel() {
    randomDierNummer = Math.floor(Math.random() * plaatjesArray.length);
    console.log("random dier nummer: " + randomDierNummer);
    dierPlaatje.src = plaatjesArray[randomDierNummer];
    resetBackgrounds();
}

function mepDier() {
    clearInterval(intervalId); // Stop het interval
    dierPlaatje.src = plaatjesArrayFout[randomDierNummer];
    mepGeluid.play();
    dierPlaatje.classList.add("mepAnimatie");

    if (randomDierNummer === 0) {
        console.log("goed");
        main.classList.add("bgGoed");
        footer.classList.add("bgGoedHF");
        header.classList.add("bgGoedHF");

        // Update de score
        getal++;
        aantalGemepteVliegen.textContent = getal;
    } else {
        console.log("fout");
        main.classList.add("bgFoutBody");
        footer.classList.add("bgFoutHF");
        header.classList.add("bgFoutHF");
    }
}

function resetBackgrounds() {
    main.classList.remove("bgFoutBody", "bgGoed");
    footer.classList.remove("bgFoutHF", "bgGoedHF");
    header.classList.remove("bgFoutHF", "bgGoedHF");
}

function startAutoPlay() {
    if (!intervalRunning) {
        intervalId = setInterval(startSpel, 1000); // Verander elke seconde
        intervalRunning = true;
    }
}

//--------------------------------------- Event Listeners ---------------------------------------
// Knop "Volgend dier"
startKnop.addEventListener("click", function() {
    startAutoPlay();
});
dierPlaatje.addEventListener("click", mepDier);
