export function getPosts(url, callMeBack) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let posts = [];
      data.news.forEach((post) => {
        posts.push(
          new Post(
            post.title,
            post.medeeDate,
            post.unshsanHun,
            post.postBody,
            post.medeeImg
          )
        );
      });
      callMeBack(posts);
    });
}

export class Post {
  constructor(_title, _medeeDate, _unshsanHun, _postBody, _medeeImg) {
    this.title = _title;
    this.medeeDate = _medeeDate;
    this.unshsanHun = _unshsanHun;
    this.postBody = _postBody;
    this.medeeImg = _medeeImg;
  }

  Create() {
    return ` 
    <div class="medee-container__wrapper">
      <div class="medee-container_wrapper__img">
          <img class="medee-page__img1" src="${this.medeeImg}" alt="zurag" />
      </div>
        <div class="medee-container_wrapper__text">
            <h3>${this.title}</h3>
            <p>
                <span class="index__medee-icon"
                ><i class="fa fa-clock-o">&ensp; ${this.medeeDate}</i>&ensp;<i
                    class="fa fa-eye"
                >
                ${this.unshsanHun} үзсэн</i
                ></span
                >
            </p>
            <p class="medee-container_wrapper__text--paragraph">
                
            ${this.postBody}
            </p>
        </div>
      <div class="clearfix"></div>
    </div>`;
  }
}
