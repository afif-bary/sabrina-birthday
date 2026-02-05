const btn = document.getElementById("btn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {
  surprise.classList.toggle("hidden");

  if (!surprise.classList.contains("hidden")) {
    btn.innerText = "Awww ❤️ (click again)";
  } else {
    btn.innerText = "Click for your surprise 🎁";
  }
});
