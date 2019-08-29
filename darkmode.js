const moonPath =
  "M13 22.5C13 34.9264 22.5 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C22.5 0 13 10.0736 13 22.5Z";
const sunPath =
  "M45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// Make sun clickable

darkMode.addEventListener("click", () => {
  // use anime.js
  const timeline = anime.timeline({
    duration: 700,
    easing: "linear"
  });
  // Add the animation to the time line
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320
      },
      "-= 500"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(243, 243, 243)" : "rgba(0, 0, 0, 0.849)",
        color: toggle ? "rgba(0, 0, 0, 0.849)" : "rgb(243, 243, 243)"
      },
      "-=500"
    )
    .add(
      {
        targets: "h2, p, h1, h5",
        color: toggle ? "rgba(0, 0, 0, 0.849)" : "rgb(243, 243, 243)"
      },
      "-=500"
    )
    .add(
      {
        targets: "button",
        backgroundColor: toggle ? "rgba(0, 0, 0, 0.849)" : "rgb(243, 243, 243)",
        color: toggle ? "rgb(243, 243, 243)" : "rgba(0, 0, 0, 0.849)"
      },
      "-=700"
    );
  // Switch Toggle
  toggle = !toggle;
});
