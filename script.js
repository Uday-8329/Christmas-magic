// Play Christmas Music
document.getElementById("playMusic").addEventListener("click", () => {
    const music = new Audio("assets/christmas-music.mp3");
    music.play();
    alert("🎵 Enjoy the festive music!");
  });
  
  // Contact Form Submission
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Your message to Santa has been sent! 🎅");
  });