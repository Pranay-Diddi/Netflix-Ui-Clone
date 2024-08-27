let navbar = document.querySelectorAll(".navsection li");
let action = document.querySelector(".action");
let actionClose = document.querySelector(".close i");
let actionPlay = document.querySelector(".action .video .play button");
let heroMoreInfo = document.querySelector(".hero .content .buttons .more_info");
let heroPlay = document.querySelector(".hero .content .buttons .playbtn");
let video = document.querySelector(".action .video .trailer")
let trailer = document.querySelector(".action .video .trailer video");
let actionVolume = document.querySelector(".action .video .volume button");
let wishList = document.querySelector(".backimg .action .video  .wishlist i");
let search = document.querySelector(".navBar .search i");
let searchBox = document.querySelector(".navBar .searchbox")
let searchBoxi = document.querySelector(".navBar .searchbox .insearch i")
// console.log(trailer.attributes);



for(let i=0 ; i<navbar.length ; i++)
{
    navbar[i].addEventListener("click",()=>{
        document.querySelector(".navBar").style.opacity = 0.2;
        document.querySelector(".hero").style.opacity = 0.2;
        document.querySelector(".body").style.filter_blur = 6+"px";
        // action.style.opacity = 1;
        action.style.z_index = 99;
        action.style.display = "flex";
    });
}





//popup window close
actionClose.addEventListener("click",()=>{
    trailer.load();
    trailer.pause();
    action.style.display = "none";
    document.querySelector(".navBar").style.opacity = 1;
    document.querySelector(".hero").style.opacity = 1;
    document.querySelector(".body").style.filter_blur = 0+"px";
    actionPlay.innerHTML =  '<i class="fa-solid fa-play"></i>' + "Play";
    actionVolume.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    actionVolume.style.opacity = 1;
    actionClose.style.opacity = 1;
    actionPlay.style.opacity = 1;
    wishList.style.opacity = 0.7;
    // videoplay();
});



//hero popup window directly open and plays
const videoplay = ()=>{
    document.querySelector(".navBar").style.opacity = 0.2;
    document.querySelector(".hero").style.opacity = 0.2;
    document.querySelector(".body").style.filter_blur = 6+"px";
    // action.style.opacity = 1;
    action.style.z_index = 99;
    action.style.display = "flex";
    actionPlay.innerHTML =  '<i class="fa-solid fa-play"></i>' + "Play";
    actionPlay.style.opacity = 0.2;
};

const playing = () =>{
    videoplay();
    actionPlay.innerHTML =  '<i class="fa-solid fa-pause"></i>' + "Pause";
    trailer.play();
    actionClose.style.opacity = 0.3;
    wishList.style.opacity = 0.2;
    // document.body.style.overflow = "hidden";
    // document.body.style.display = flex;
};

// const playing = () => {}
heroMoreInfo.addEventListener("click",videoplay);
heroPlay.addEventListener("click", playing);


//popup play and pause
const playOrPause = ()=>{
    // console.log(actionClose.style.filter_blur);
    if(actionPlay.innerHTML === '<i class="fa-solid fa-play"></i>' + "Play"){
        actionPlay.innerHTML =  '<i class="fa-solid fa-pause"></i>' + "Pause";
        trailer.play();
        // trailer.removeAttribute("muted");
        // console.log(document.querySelector(".backimg .action .close  i").style.filter_blur)
        actionClose.style.opacity= 0.3;
        actionPlay.style.opacity= 0.3;
        wishList.style.opacity = 0;
        actionVolume.style.opacity = 0.3;
        // console.log(document.querySelector(".backimg .action .close  i").style.filter_blur)
    }
    else{
        // console.log("else");
        actionPlay.innerHTML  =  '<i class="fa-solid fa-play"></i>' + "Play";
        trailer.pause();
        actionClose.style.opacity= 0.5;
        actionPlay.style.opacity= 0.6;
        wishList.style.opacity = 0.5;
        actionVolume.style.opacity = 0.6;
        //actionClose.style.filter_blur=4+"px"  why????
    }
}


actionPlay.addEventListener("click",playOrPause);


//action volume button
actionVolume.addEventListener("click",()=>{
    if(actionVolume.innerHTML === '<i class="fa-solid fa-volume-xmark"></i>'){
        actionVolume.innerHTML =  '<i class="fa-solid fa-volume-high"></i>';
        trailer.muted = false;
        trailer.volume = 1.0;
    }
    else{
        actionVolume.innerHTML  =  '<i class="fa-solid fa-volume-xmark"></i>';
        trailer.volume = 0.0;
        trailer.muted = true;
    }
});

//video click => pauses or plays video
video.addEventListener("click",playOrPause);

//navbar search box
search.addEventListener("click",()=>{
    search.style.display = "none";
    searchBox.style.display = "flex";
});

//close navbar search box

searchBoxi.addEventListener("click",()=>{
    if(search.style.display === "none")
    {
        search.style.display = "flex";
        searchBox.style.display = "none";
    }
    else{
        search.style.display = "none";
        searchBox.style.display = "flex";
    }
});



// Demo or reference to get the item clicked

document.addEventListener('DOMContentLoaded', (event) => {
    const itemsContainer = document.querySelector('.movies .toprated .moviescontent .images');

    itemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('child')) {
            handler(); 
            // const itemId = event.target.getAttribute('id');
            // console.log('Item clicked:', itemId);
            // performActionOnItem(itemId);
        }
        function handler() {
            playing();
        }
    });

    function performActionOnItem(itemId) {
        // Perform your action here. For example:
        alert('Performing action on item with ID: ' + itemId);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const moviesContainer = document.querySelector('.movies');

    moviesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('child')) {
            const itemId = event.target.getAttribute('data-id');
            const parentClass = getParentClass(event.target);
            // console.log('Item clicked:', itemId);
            // console.log('Parent class:', parentClass);
            // handleItemClick(itemId, parentClass);
            handle();
        }
    });

    function handle() {
        // Call your custom function here
        // myCustomFunction(itemId, parentClass);
        playing();
    }

    function getParentClass(element) {
        while (element && !element.classList.contains('movies')) {
            if (element.classList.contains('trending') || element.classList.contains('top-rated') || element.classList.contains('toprated Action_Thrillers') || element.classList.contains('Comedy toprated') || element.classList.contains('toprated Horror') || element.classList.contains('toprated documentry')) {
                return element.className;
            }
            element = element.parentElement;
        }
        return null;
    }
});


// //other demo
// const showVideoOverlay = (videoSrc) => {
//     const videoOverlay = document.getElementById('videoOverlay');
//     const videoPlayer = document.getElementById('videoPlayer');
    
//     videoPlayer.src = videoSrc;
//     videoOverlay.style.display = 'flex';
//     // document.body.style.overflow = 'hidden'; // Prevent scrolling
// };


// const closeVideoOverLay = () => {
//     const videoOverlay = document.getElementById('videoOverlay');
//     const videoPlayer = document.getElementById('videoPlayer');

//     videoPlayer.src = videoSrc;
//     videoOverlay.style.display = 'none';

// };

// // JavaScript to handle click events
// document.addEventListener('DOMContentLoaded', (event) => {
//     const moviesContainer = document.querySelector('.movies');
//     const closeButton = document.getElementById('closeButton');

//     moviesContainer.addEventListener('click', (event) => {
//         if (event.target.classList.contains('child')) {
//             const videoSrc = event.target.getAttribute('data-video-src');
//             showVideoOverlay(videoSrc);
//         }
//     });
//     closeButton.addEventListener('click',closeVideoOverLay);
//     // Close video overlay on click outside the video player
//     const videoOverlay = document.getElementById('videoOverlay');
//     videoOverlay.addEventListener('click', (event) => {
//         if (event.target === videoOverlay) {
//             videoOverlay.style.display = 'none';
//             document.body.style.overflow = 'auto'; // Re-enable scrolling
//             document.getElementById('videoPlayer').src = ''; // Stop the video
//         }
//     });
// });