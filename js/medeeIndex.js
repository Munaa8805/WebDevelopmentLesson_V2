import { getPosts } from "./medeeModule.js";

const postUrl = "https://api.jsonbin.io/b/5ed985c0655d87580c440bf9/latest";

getPosts(postUrl, (posts) => {
  posts.forEach((post) => {
    document.getElementById(
      "medee-container__first"
    ).innerHTML += post.Create();
  });
});
