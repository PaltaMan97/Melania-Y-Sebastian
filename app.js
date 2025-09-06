const inicio = new Date("2025-08-05"); //fecha de inicio
const hoy = new Date();

// diferencia en milisegundos
const diffTime = hoy - inicio;

// convertir a días
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("dias").textContent = diffDays;

// ==== PLAYLIST ====
const PLAYLIST_ID = "PL3EEGarmr7mTV-SMNbtE2FTfRDgID0UYL";
const videos = [
    { id: "ZG0cvdBlctM", title: "TE AMO" },
    { id: "TlrNxJqODBc", title: "TE AMOO" },
    { id: "_CNipqLpmpU", title: "TE AMOOO" },
    { id: "KbhLOifTuF4", title: "TE AMOOOO" },
    { id: "t4_weQzWcp8", title: "TE AMOOOOO" },
    { id: "onCZOgWlr1U", title: "TE AMOOOOOO" },
    { id: "RL8Ct8dKmAk", title: "TE AMOOOOOOO" },
    { id: "ccsN6XxYKZM", title: "TE AMOOOOOOOO" },
    { id: "z0QiR972_uk", title: "TE AMOOOOOOOOO" },
    { id: "Jc6-WXt5iKA", title: "TE AMOOOOOOOOOO" },
    { id: "1_tjOgqG8Yc", title: "TE AMOOOOOOOOOOO" },
    { id: "wtF58gte6Zo", title: "TE AMOOOOOOOOOOOO" },
    { id: "FYIWKHScZ_U", title: "TE AMOOOOOOOOOOOOOO" },
    { id: "s6TtwR2Dbjg", title: "TE AMOOOOOOOOOOOOOOO" },
    { id: "mhrAcyWZrs8", title: "TE AMOOOOOOOOOOOOOOOO" }
];

const playlistContainer = document.getElementById("playlist");

videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <a href="https://www.youtube.com/watch?v=${video.id}&list=${PLAYLIST_ID}" target="_blank">
      <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}">
      <p>${video.title}</p>
    </a>
  `;
    playlistContainer.appendChild(card);
});