function myFunction() {
  setInterval(function () {
    const postUrl = "https://api.jsonbin.io/b/5ec7d4b5e91d1e45d10f3d94/latest";
    fetch(postUrl)
      .then((response) => response.json())
      .then(function (data) {
        let returnHTML = "";
        data.news.forEach((element) => {
          returnHTML += ` 
        <div class="medee-container__wrapper">
            <div class="medee-container_wrapper__img">
                <img class="medee-page__img1" src="${element.medeeImg}" alt="zurag" />
            </div>
                <div class="medee-container_wrapper__text">
                    <h3>${element.title}</h3>
                    <p>
                        <span class="index__medee-icon"
                        ><i class="fa fa-clock-o">&ensp; ${element.medeeDate}</i>&ensp;<i
                            class="fa fa-eye"
                        >
                        ${element.unshsanHun} үзсэн</i
                        ></span
                        >
                    </p>
                    <p class="medee-container_wrapper__text--paragraph">
                        
                    ${element.postBody}
                    </p>
            </div>
            <div class="clearfix"></div>
      </div>`;
        });
        document.querySelector(
          ".medee-container__first"
        ).innerHTML = returnHTML;
      });
  }, 5000);
}
myFunction();
