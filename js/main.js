var articleDetails = document.querySelector(".article-details");
var socialMedia = document.querySelector(".social-media");
var authorAvatar = document.querySelector("#author-avatar");
var articleInfo = document.querySelector(".article-info");
var shareBtn = document.querySelector(".share-btn");

var shareHidden = true;


shareBtn.addEventListener("click", function(){
    if(shareHidden && window.screen.width <= 424){
        socialMedia.classList.remove("hide");
        authorAvatar.classList.add("hide");
        articleInfo.classList.add("hide");
        articleDetails.classList.add("dark-bg");
        shareBtn.classList.add("dark-share-btn");
        shareHidden = false;
    }

    else if(shareHidden && window.screen.width >= 425){
        socialMedia.classList.remove("hide");
        shareBtn.classList.add("dark-share-btn");
        console.log("Share page shown");
        shareHidden = false;

    }
    else if(!shareHidden && window.screen.width >= 425){
        socialMedia.classList.add("hide");
        shareBtn.classList.remove("dark-share-btn");
        console.log("Share page shown");
        shareHidden = true;

    }
    else {
        socialMedia.classList.add("hide");
        authorAvatar.classList.remove("hide");
        articleInfo.classList.remove("hide");
        articleDetails.classList.remove("dark-bg");
        shareBtn.classList.remove("dark-share-btn");
        shareHidden = true;

    }
})

