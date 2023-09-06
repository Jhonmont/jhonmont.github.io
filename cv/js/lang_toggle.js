/* Insert Json files content into HTML */

const flagsElements = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`../lang/${language}.json`);
    const texts = await requestJson.json();
    
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElements.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
});


/* Change attribute data-lang */

const espLangBtn = document.querySelector(".flag_img_esp");
const engLangBtn = document.querySelector(".flag_img_eng");

espLangBtn.addEventListener("click", setEspLang);
engLangBtn.addEventListener("click", setEngLang);

function setEspLang() {
    setUserLang("español");
}

function setEngLang() {
    setUserLang("english");
}

function setUserLang(newLang) {
    document.documentElement.setAttribute("data-lang", newLang);
    localStorage.setItem("lang", newLang);
}