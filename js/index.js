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
        // "images/kim-and-north-mother-daughters.jpg",
        // "images/maxresdefault.jpg",
        // "images/flappybird-1681242406514.jpg",
        // "images/RaQz46j7_400x400.jpg",
        // "images/tyra-banks-278b5e5c3e50469585d58d095d9c4d66.jpg",
        // "images/c08e3a04-ffa3-11ea-8ff7-6d1f87e27e9a.cf.jpg",
        // "images/p_frozen_18373_3131259c.jpeg",
        // "images/SP705-iphone_6-mul.png",
        // "images/foresthill_mmg.jpg",
        "images/IMG_0858.jpeg",
        "images/IMG_0857.jpeg",
        "images/IMG_0856.jpeg",
        "images/IMG_0855.jpeg",
        "images/IMG_0854.jpeg",
        "images/IMG_0853.jpeg",
        "images/IMG_0852.jpeg",
        "images/IMG_0851.jpeg",
        "images/IMG_0850.jpeg",
        "images/IMG_0849.jpeg",
        "images/IMG_0848.jpeg",
        "images/IMG_0847.jpeg",
        "images/IMG_0846.jpeg",
        "images/IMG_0845.jpeg",
        "images/IMG_0844.jpeg",
        "images/IMG_0843.jpeg",
        "images/IMG_0842.jpeg",
        "images/IMG_0841.jpeg",
        "images/IMG_0840.jpeg",
        "images/IMG_0839.jpeg",
        "images/IMG_0838.jpeg",
        "images/IMG_0837.jpeg",
        "images/IMG_0836.jpeg",
        "images/IMG_0778.jpeg",
        "images/IMG_0777.jpeg",
        "images/IMG_0776.jpeg",
        "images/IMG_0775.jpeg",
        "images/IMG_0774.jpeg",
        "images/IMG_0773.jpeg",
        "images/IMG_0772.jpeg",
        "images/IMG_0771.jpeg",
        "images/IMG_0798.jpeg",
        "images/IMG_0797.jpeg",
        "images/IMG_0796.jpeg",
        "images/IMG_0795.jpeg",
        "images/IMG_0794.jpeg",
        "images/IMG_0792.jpeg",
        "images/IMG_0792.jpeg",
        "images/IMG_0791.jpeg",
        "images/IMG_0790.jpeg",
        "images/IMG_0789.jpeg",
        "images/IMG_0788.jpeg",
        "images/IMG_0787.jpeg",
        "images/IMG_0786.jpeg",
        "images/IMG_0785.jpeg",
        "images/IMG_0784.jpeg",
        "images/IMG_0783.jpeg",
        "images/IMG_0782.jpeg",
        "images/IMG_0781.jpeg",
        "images/IMG_0780.jpeg",
        "images/IMG_0779.jpeg",
        "images/IMG_0805.jpeg",
        "images/IMG_0811.jpeg",
        "images/IMG_0818.jpeg",
        "images/IMG_0817.jpeg",
        "images/IMG_0816.jpeg",
        "images/IMG_0816.jpeg",
        "images/IMG_0815.jpeg",
        "images/IMG_0814.jpeg",
        "images/IMG_0813.jpeg",
        "images/IMG_0812.jpeg",
        "images/IMG_0810.jpeg",
        "images/IMG_0809.jpeg",
        "images/IMG_0808.jpeg",
        "images/IMG_0807.jpeg",
        "images/IMG_0806.jpeg",
        "images/IMG_0804.jpeg",
        "images/IMG_0803.jpeg",
        "images/IMG_0802.jpeg",
        "images/IMG_0801.jpeg",
        "images/IMG_0800.jpeg",
        "images/IMG_0799.jpeg",
        "images/IMG_0835.jpeg",
        "images/IMG_0834.jpeg",
        "images/IMG_0779.jpeg",
        "images/IMG_0832.jpeg",
        "images/IMG_0931.jpeg",
        "images/IMG_0828.jpeg",
        "images/IMG_0830.jpeg",
        "images/IMG_0829.jpeg",
        "images/IMG_0827.jpeg",
        "images/IMG_0826.jpeg",
        "images/IMG_0825.jpeg",
        "images/IMG_0824.jpeg",
        "images/IMG_0823.jpeg",
        "images/IMG_0822.jpeg",
        "images/IMG_0821.jpeg",
        "images/IMG_0820.jpeg",
        "images/IMG_0819.jpeg",

        "images/IMG_0749.jpeg",
        "images/IMG_0750.jpeg",
        "images/IMG_0751.jpeg",
        "images/IMG_0752.jpeg",
        "images/IMG_0755.jpeg",
        "images/IMG_0753.jpeg",
        "images/IMG_0758.jpeg",
        "images/IMG_0757.jpeg",
        "images/IMG_0756.jpeg",
        "images/IMG_0761.jpeg",
        "images/IMG_0760.jpeg",
        "images/IMG_0759.jpeg",
        "images/IMG_0764.jpeg",
        "images/IMG_0763.jpeg",
        "images/IMG_0762.jpeg",
        "images/IMG_0767.jpeg",
        "images/IMG_0766.jpeg",
        "images/IMG_0765.jpeg",
        "images/IMG_0768.jpeg",
        "images/IMG_0769.jpeg",
        "images/IMG_0770.jpeg",


        // "images/kim-and-north-mother-daughters.jpg",
        // "images/maxresdefault.jpg",
        // "images/flappybird-1681242406514.jpg",
        // "images/RaQz46j7_400x400.jpg",
        // "images/tyra-banks-278b5e5c3e50469585d58d095d9c4d66.jpg",
        // "images/c08e3a04-ffa3-11ea-8ff7-6d1f87e27e9a.cf.jpg",
        // "images/p_frozen_18373_3131259c.jpeg",
        // "images/SP705-iphone_6-mul.png",
        // "images/foresthill_mmg.jpg",
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

