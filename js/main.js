var articleDetails = document.querySelector(".article-details");
var socialMedia = document.querySelector(".social-media");
var authorAvatar = document.querySelector("#author-avatar");
var articleInfo = document.querySelector(".article-info");
var shareBtn = document.querySelector(".share-btn");


shareBtn.addEventListener("click", function(){
    if(socialMedia.classList.contains("hide")){
        socialMedia.classList.remove("hide");
        authorAvatar.classList.add("hide");
        articleInfo.classList.add("hide");
        articleDetails.classList.add("dark-bg");
        shareBtn.classList.add("dark-share-btn");
    }
    else {
        socialMedia.classList.add("hide");
        authorAvatar.classList.remove("hide");
        articleInfo.classList.remove("hide");
        articleDetails.classList.remove("dark-bg");
        shareBtn.classList.remove("dark-share-btn");
    }
})
