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
  button.addEventListener("click", (event) => {
    copyText(
      `<div class="profile" data-image="img/example.gif" data-status="${profile.getAttribute(
        "data-status"
      )}"></div>`
    );
  });
});