function changeStatus() {
  const profile = document.querySelector(".profile");
  const status = ["online", "idle", "do-not-disturb", "offline"];
  const data = profile.getAttribute("data-status");
  const currentIndex = status.indexOf(data);
  const nextIndex = (currentIndex + 1) % status.length;
  const nextStatus = status[nextIndex];
  profile.setAttribute("data-status", nextStatus);
}

document.addEventListener("DOMContentLoaded", function () {
  const profile = document.querySelector(".profile");
  const button = document.getElementById("copy");
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-regular fa-clone");
  button.appendChild(icon);
  button.addEventListener("click", (event) => {
    navigator.clipboard.writeText(
      `<div class="profile" data-image="img/example.gif" data-status="${profile.getAttribute(
        "data-status"
      )}"></div>`
    );
    icon.setAttribute("class", "fa-solid fa-check");
    icon.style.color = "#4ce964";
    setTimeout(() => {
      icon.setAttribute("class", "fa-regular fa-clone");
      icon.style.color = "#fff";
    }, 500);
  });
});
