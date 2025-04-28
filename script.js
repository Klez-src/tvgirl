document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect for logos
  const logos = document.querySelectorAll(".logo");
  logos.forEach((logo, index) => {
    logo.style.opacity = "0";
    setTimeout(() => {
      logo.style.transition = "opacity 0.5s ease";
      logo.style.opacity = "1";
    }, index * 300); // Staggered fade-in for each logo
  });

  // Ensure YouTube video autoplays (handled by iframe src, but this is a placeholder for potential API usage)
  const ytVideo = document.getElementById("yt-video");
  ytVideo.src += "&autoplay=1"; // Reinforce autoplay
});
