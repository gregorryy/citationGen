document.addEventListener("DOMContentLoaded", () => {
  const citationTexte = document.querySelector("#citation-text");
  const citationAuteur = document.querySelector("#citation-author");
  const boutonNouvelleCitation = document.querySelector("#reroll");

  function afficherCitationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    const citation = citations[index];
    citationTexte.innerHTML = citation.text;
    citationAuteur.innerHTML = `<span class="author">— ${citation.author}<span>`;
  }

  boutonNouvelleCitation.addEventListener("click", afficherCitationAleatoire);

  // Affiche une citation au chargement
  afficherCitationAleatoire();
});

//DARK MODE
//
// Récupérer le bouton et le body
const toggleButton = document.getElementById("toggle-theme");
const body = document.body;
const icon = toggleButton.querySelector("i"); // Sélectionner l'icône

// Vérifier si le mode sombre est activé
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun"); // Icône pour le mode clair
}

// Ajouter un événement au clic pour changer de thème
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    localStorage.setItem("dark-mode", "false");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
