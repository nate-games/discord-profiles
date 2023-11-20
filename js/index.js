function changeStatus() {
  const profile = document.querySelector(".profile");
  const status = ["online", "idle", "do-not-disturb", "offline"];
  const data = profile.getAttribute("data-status");
  const currentIndex = status.indexOf(data);
  const nextIndex = (currentIndex + 1) % status.length;
  const nextStatus = status[nextIndex];
  profile.setAttribute("data-status", nextStatus);
}

function generate() {
  const profile = document.querySelector(".profile");
  copyText(
    `<div class="profile" data-image="img/example.gif" data-status="${profile.getAttribute(
      "data-status"
    )}"></div>`
  );
}

if (location.search === "?step=2") {
  const step_1 = document.getElementById("step_1");
  const step_2 = document.getElementById("step-2");
  const e_404 = document.getElementById("404");
  const completeCard = document.getElementById("completeCard");
  e_404.remove();
  step_1.remove();
  step_2.style.display = "block";
  // start
  const completeButton = document.getElementById("completeButton");
  completeButton.addEventListener("click", complete);
  function complete() {
    completeCard.style.display = "flex";
    setTimeout(() => {
      completeCard.style.transform = "scale(1)"
    }, 50);
  }
} else if (location.search === "") {
  const step_1 = document.getElementById("step_1");
  const step_2 = document.getElementById("step-2");
  const e_404 = document.getElementById("404");
  step_1.style.display = "inline-block";
  e_404.remove();
  step_2.remove();
} else {
  const step_1 = document.getElementById("step_1");
  const step_2 = document.getElementById("step-2");
  step_2.remove();
  step_1.remove();
}
