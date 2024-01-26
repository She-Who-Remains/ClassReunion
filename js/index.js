let  countDownDate = new Date("June 21, 2024 00:00:00").getTime();
var x = setInterval(() => {
    var now =  new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000 );


    let time = `${days} : ${hours} : ${minutes} : ${seconds}`;
    document.querySelector('.countdown-time').innerHTML = time;
    // document.getElementById("days").innerHTML = days;
    // document.getElementById("hours").innerHTML = hours;
    // document.getElementById("minutes").innerHTML = minutes;
    // document.getElementById("seconds").innerHTML = seconds;

    if(distance <0){
        clearInterval(x);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
    

}, 1000);

const seeMoreButton = document.querySelector(".classmates--see--more--btn");

function clickedSeeMore(){

    //button
    
    //see more parent div
    classmates2 = document.querySelector(".classmates2")
    //see more div
    seeMoreClasmates = document.querySelector(".classmates--see--more");

    if (classmates2.style.display === "none" || classmates2.style.display === '')
    { classmates2.style.display = 'block';
    seeMoreClasmates.style.justifyContent = 'space-around';
    seeMoreClasmates.style.display = 'flex';
    seeMoreClasmates.style.flexWrap = 'wrap';
    seeMoreButton.innerText = "see less";

    } else {
        classmates2.style.display = "none";
        toggleButton.innerText = 'See More';
    }

    
    // const seeMoreClasmates = document.querySelector(".classmates--see--more");
    // const classmates2 =  document.querySelector(".classmates2");
    // seeMoreClasmates.style.justifyContent = 'space-around';
    // seeMoreClasmates.style.display = 'flex';
    // classmates2.style.display = 'show';
}
// seeMoreButton.addEventListener('click', clickedSeeMore);

document.addEventListener("DOMContentLoaded", function() {
    // Array of image sources
    var imageSources = [
        "images/kim-and-north-mother-daughters.jpg",
        "images/maxresdefault.jpg",
        "images/flappybird-1681242406514.jpg",
        "images/RaQz46j7_400x400.jpg",
        "images/tyra-banks-278b5e5c3e50469585d58d095d9c4d66.jpg",
        "images/c08e3a04-ffa3-11ea-8ff7-6d1f87e27e9a.cf.jpg",
        "images/p_frozen_18373_3131259c.jpeg",
        "images/SP705-iphone_6-mul.png",
        "images/foresthill_mmg.jpg",
        "images/kim-and-north-mother-daughters.jpg",
        "images/maxresdefault.jpg",
        "images/flappybird-1681242406514.jpg",
        "images/RaQz46j7_400x400.jpg",
        "images/tyra-banks-278b5e5c3e50469585d58d095d9c4d66.jpg",
        "images/c08e3a04-ffa3-11ea-8ff7-6d1f87e27e9a.cf.jpg",
        "images/p_frozen_18373_3131259c.jpeg",
        "images/SP705-iphone_6-mul.png",
        "images/foresthill_mmg.jpg",
        // Add more image sources as needed
    ];

    // Reference to the image grid container
    var imageGridContainer = document.getElementById("imageGrid");

    // Loop through the image sources and create HTML elements dynamically
    imageSources.forEach(function(imageSource) {
        var imageElement = document.createElement("div");
        var img = document.createElement("img");
        img.src = imageSource;
        img.classList.add("img-fluid");
        img.alt = "";

        // Append the image to the grid container
        imageElement.appendChild(img);
        imageGridContainer.appendChild(imageElement);
    });
});

