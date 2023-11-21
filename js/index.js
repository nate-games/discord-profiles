// basic routing
const home = document.getElementById("home");
const step_1 = document.getElementById("step_1");
const step_2 = document.getElementById("step_2");
const complete = document.getElementById("complete");
const error_404 = document.getElementById("404");
const docs = document.getElementById("docs");

// define routes

function removeElements(param1, param2, param3, param4, param5) {
  param1.remove();
  param2.remove();
  param3.remove();
  param4.remove();
  param5.remove();
}

if (location.search === "") {
  removeElements(docs, error_404, complete, step_1, step_2);
} else if (location.search === "?docs") {
  removeElements(error_404, complete, step_1, step_2, home);
} else if (location.search === "?step=1") {
  removeElements(error_404, complete, docs, home, step_2);
} else if (location.search === "?step=2") {
  removeElements(error_404, complete, docs, home, step_1);
  allowCompletion();
} else if (location.search === "?complete") {
  removeElements(error_404, docs, home, step_2, step_1);
} else {
  removeElements(docs, home, step_2, step_1, complete)
}

// functions
function allowCompletion() {
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
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function changeStatus() {
  const profile = document.querySelector(".profile");
  const status = ["online", "idle", "do-not-disturb", "offline"];
  const data = profile.getAttribute("data-status");
  const currentIndex = status.indexOf(data);
  const nextIndex = (currentIndex + 1) % status.length;
  const nextStatus = status[nextIndex];
  profile.setAttribute("data-status", nextStatus);
}