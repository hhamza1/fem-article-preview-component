var articleDetails = document.querySelector(".article-details");
var socialMedia = document.querySelector(".social-media");
var authorAvatar = document.querySelector("#author-avatar");
var articleInfo = document.querySelector(".article-info");
var shareBtn = document.querySelector(".share-btn");
var shareIcon = document.getElementsByTagName("path")[0];



var shareHidden = true;


shareBtn.addEventListener("click", function(){
    if(shareHidden && window.screen.width <= 1023){
        socialMedia.classList.remove("hide");
        authorAvatar.classList.add("hide");
        articleInfo.classList.add("hide");
        articleDetails.classList.add("dark-bg");
        shareBtn.classList.add("dark-share-btn");
        shareIcon.setAttribute("fill", "white");
        shareHidden = false;
    }

    else if(shareHidden && window.screen.width >= 1024){
        socialMedia.classList.remove("hide");
        shareBtn.classList.add("dark-share-btn");
        shareIcon.setAttribute("fill", "white");
        shareHidden = false;

    }
    else if(!shareHidden && window.screen.width >= 1024){
        socialMedia.classList.add("hide");
        shareBtn.classList.remove("dark-share-btn");
        shareIcon.setAttribute("fill", "#6E8098");
        shareHidden = true;

    }
    else {
        socialMedia.classList.add("hide");
        authorAvatar.classList.remove("hide");
        articleInfo.classList.remove("hide");
        articleDetails.classList.remove("dark-bg");
        shareBtn.classList.remove("dark-share-btn");
        shareIcon.setAttribute("fill", "#6E8098");     
        shareHidden = true;

    }
})

