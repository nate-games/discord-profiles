function testScripts(input) {
  console.log(isSuccess());
  function isSuccess() {
    if (input == "test") {
      return true;
    }
  }
}

testScripts("test");

document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".profile");
  profiles.forEach(function (profile) {
    if (!profile.getAttribute("data-image")) {
      profile.style.backgroundImage = `url('img/example.gif')`;
    } else {
      profile.style.backgroundImage = `url('${profile.getAttribute(
        "data-image"
      )}')`;
    }
    if (!profile.getAttribute("data-status")) {
      profile.setAttribute("data-status", "offline");
    }
  });
});
