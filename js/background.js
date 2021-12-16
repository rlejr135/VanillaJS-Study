const bgimg = document.querySelector(".bgimg");

const images = [ 
    "bailey-zindel-NRQV-hBF10M-unsplash.jpg", 
    "mark-harpur-K2s_YE031CA-unsplash.jpg", 
    "jeremy-bishop-QHZn3-0bbEM-unsplash.jpg", 
    "luca-bravo-zAjdgNXsMeg-unsplash.jpg",
    "ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg",
    "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg"
];



let NowImage = images[Math.floor(Math.random() * images.length)];

// const bgimg = document.createElement("img");

bgimg.style.backgroundImage = `url(img/${NowImage})`;

//document.body.appendChild(bgimg);
