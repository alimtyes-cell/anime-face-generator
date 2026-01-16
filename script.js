alert("JS connected bro 🔥");

const uploadBtn = document.getElementById("uploadBtn");
const uploadInput = document.getElementById("uploadInput");
const beforeImg = document.getElementById("beforeImg");
const afterImg = document.getElementById("afterImg");
const loader = document.getElementById("loader");

uploadBtn.addEventListener("click", () => {
  uploadInput.click();
});

uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file) return;

  const imageURL = URL.createObjectURL(file);

  // show before
  beforeImg.src = imageURL;

  // show loader
  loader.style.display = "block";

  // fake AI delay
  setTimeout(() => {
    afterImg.src = imageURL;
    loader.style.display = "none";
  }, 2500);
});
const downloadBtn = document.getElementById("downloadBtn");

uploadInput.addEventListener("change", () => {
  setTimeout(() => {
    downloadBtn.style.display = "inline-block";
  }, 2600);
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = afterImg.src;
  link.download = "anime-face.png";
  link.click();
});
uploadBtn.addEventListener("click", () => {
  uploadInput.click();

  document.querySelector(".cards").scrollIntoView({
    behavior: "smooth"
  });
});
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = afterImg.src;
  link.download = "anime-face.png";
  link.click();
});
setTimeout(() => {
  afterImg.src = imageURL;
  loader.style.display = "none";
  downloadBtn.style.display = "inline-block";
}, 2500);
if (!file.type.startsWith("image/")) {
  alert("Please upload an image only 😅");
  return;
}
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "AI Anime Face Generator",
      text: "Check this AI Anime Face Generator 🔥",
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device 😅");
  }
});