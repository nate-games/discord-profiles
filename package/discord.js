document.addEventListener("DOMContentLoaded", function () {
  var profiles = document.querySelectorAll(".profile");

  profiles.forEach(function (profile) {
    profile.style.backgroundImage =
      "url('" + profile.getAttribute("data-image") + "')";
  });
  // load css files
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdn.jsdelivr.net/gh/nate-games/discord-profiles@main/package/style.css";
  document.head.appendChild(link);
});
