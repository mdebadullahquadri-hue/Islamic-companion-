let tasbihCount = 0;

function openQuran() {
    const quran = document.getElementById("quran");
    const duas = document.getElementById("duas");
    const tasbih = document.getElementById("tasbih");

    quran.style.display = "block";
    duas.style.display = "none";
    tasbih.style.display = "none";

    quran.scrollIntoView({
        behavior: "smooth"
    });
}

function openDuas() {
    const quran = document.getElementById("quran");
    const duas = document.getElementById("duas");
    const tasbih = document.getElementById("tasbih");

    quran.style.display = "none";
    duas.style.display = "block";
    tasbih.style.display = "none";

    duas.scrollIntoView({
        behavior: "smooth"
    });
}

function openTasbih() {
    const quran = document.getElementById("quran");
    const duas = document.getElementById("duas");
    const tasbih = document.getElementById("tasbih");

    quran.style.display = "none";
    duas.style.display = "none";
    tasbih.style.display = "block";

    tasbih.scrollIntoView({
        behavior: "smooth"
    });
}

function increaseTasbih() {
    tasbihCount++;

    document.getElementById("counter").textContent =
        tasbihCount;
}

function resetTasbih() {
    tasbihCount = 0;

    document.getElementById("counter").textContent =
        tasbihCount;
}

function saveBookmark() {
    localStorage.setItem(
        "quranBookmark",
        "Surah Al-Fatihah"
    );

    alert("🔖 Bookmark saved!");
}

function previousSurah() {
    alert("You are at the first Surah.");
}

function nextSurah() {
    alert("More Surahs will be added soon, InshaAllah.");
}
