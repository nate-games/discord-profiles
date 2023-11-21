function testScripts(input) {
  console.log(isSuccess());
  function isSuccess() {
    if (input == "v1") {
      return "Discord-Profiles Package version v1 - Installation Successful";
    }
  }
}

testScripts("v1");

document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".profile");
  profiles.forEach(function (profile) {
    if (!profile.getAttribute("data-image")) {
      profile.setAttribute("data-image", `${profileConfig.defaultImage}`);
      profile.style.backgroundImage = `url('${profile.getAttribute(
        "data-image"
      )}')`;
    } else if (!profile.getAttribute("data-status")) {
      profile.setAttribute("data-status", `${profileConfig.defaultStatus}`);
      profile.style.backgroundImage = `url('${profile.getAttribute(
        "data-status"
      )}')`;
    } else if (profile.getAttribute("data-image")) {
      profile.style.backgroundImage = `url('${profile.getAttribute(
        "data-image"
      )}')`;
    }
    if (!profile.getAttribute("data-status")) {
      profile.setAttribute("data-status", "offline");
    }
  });
});