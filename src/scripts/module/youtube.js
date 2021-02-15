const videoButton = document.querySelector(".video__icon");
const youtubeVideo = document.querySelector(".youtube");
const youtubeBackground = document.querySelector(".youtube__background");

export const youtubeVideoOpen = () => {
  videoButton.addEventListener("click", function () {
    youtubeVideo.classList.remove("youtube--closed");
  });
};
export const youtubeVideoClose = () => {
  youtubeBackground.addEventListener("click", function () {
    youtubeVideo.classList.add("youtube--closed");
  });
};
