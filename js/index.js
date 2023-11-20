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
  const steps = document.getElementById("steps");
  e_404.remove();
  step_1.remove();
  steps.remove()
  step_2.style.display = "block";
  // start
  const completeButton = document.getElementById("completeButton");
  completeButton.addEventListener("click", function () {
    const completeCard = document.getElementById("completeCard");
    completeCard.style.display = "inline-block";
    completeCard.style.transform = "scale(0)";
    setTimeout(() => {
      completeCard.style.transform = "scale(1.2)";
      completeCard.style.opacity = "1";
    }, 200);
    setTimeout(() => {
      completeCard.style.transform = "scale(.9)";
    }, 400);
    setTimeout(() => {
      completeCard.style.transform = "scale(1)";
    }, 600);
  });
} else if (location.search === "") {
  const step_1 = document.getElementById("step_1");
  const step_2 = document.getElementById("step-2");
  const e_404 = document.getElementById("404");
  const steps = document.getElementById("steps");
  step_1.style.display = "inline-block";
  steps.remove()
  e_404.remove();
  step_2.remove();
} else if (location.search === "?steps") {
  const step_1 = document.getElementById("step_1");
  const step_2 = document.getElementById("step-2");
  const e_404 = document.getElementById("404");
  const steps = document.getElementById("steps");
  steps.style.display = "inline-block";
  e_404.remove();
  step_2.remove();
  step_1.remove()
} else {
  const step_1 = document.getElementById("step_1");
  const step_2 = document.getElementById("step-2");
  const steps = document.getElementById("steps");
  steps.remove()
  step_2.remove();
  step_1.remove();
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
