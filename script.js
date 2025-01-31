"use strict";
console. log("Guten Tag 👋")
function filterTable() {
    const filterValue = document.getElementById("partyFilter").value.toLowerCase();
    const rows = document.querySelectorAll("table tbody tr");
    const wordclouds = document.querySelectorAll(".wordcloud");
    const imageContainer = document.querySelector(".images");
    
    let visibleImages = 0;

    rows.forEach(row => {
        const party = row.cells[0].textContent.toLowerCase();
        if (party.includes(filterValue) || filterValue === "") {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

    wordclouds.forEach(img => {
        const imgId = img.id.toLowerCase();
        if (imgId.includes(filterValue) || filterValue === "") {
            img.style.display = "";
            visibleImages++;
        } else {
            img.style.display = "none";
        }
    });

// Wenn nur eine Partei gewählt wurde, vergrößere Wordcloud und zentriere sie
    if (visibleImages === 1 && filterValue !== "") {
        imageContainer.classList.add("single-wordcloud");
    } else {
        imageContainer.classList.remove("single-wordcloud");
    }
}
