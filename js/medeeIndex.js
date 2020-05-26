import { getPosts } from "./newModule.js";
function mySetInterval() {
  setInterval(function () {
    const postUrl = "https://api.jsonbin.io/b/5ec7d4b5e91d1e45d10f3d94/latest";
  }, 5000);
}
mySetInterval();
getPosts(postUrl, (posts) => {
  posts.forEach((post) => {
    document.querySelector(
      ".medee-container__first"
    ).innerHTML += post.Create();
  });
});
