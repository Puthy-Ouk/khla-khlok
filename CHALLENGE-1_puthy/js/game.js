visiblility('resetButtonId', false);

//constant variable
const PLAY_DELAY = 2000;

// Array get images
const IMAGE_FILES = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

// function get images
function getImages() {
    var images = "";
    var storeNewImages =[];   
for (let i = 0; i < 3; i++) {
    var randomImages = Math.floor(Math.random()*6); //random image
    storeNewImages.push(randomImages);   //add new image to imagesArray
        var resultImages = IMAGE_FILES[storeNewImages[i]];
        images +=`
             <img src="images/${resultImages}" width="100">
         `;
    }
    return images;
    }
//function set message
function setHTML(text) {
    var result = document.querySelector('#resultId');
    result.innerHTML = text;
}

// function set element
function visiblility(element, isVisible) {
    var property = isVisible ? "block" : "none";
    document.querySelector('#' + element).style.display = property;
}

function onPlayClicked() {

    setHTML("Wait ...");
    // set delay
    setTimeout(() => {
        setHTML(getImages());
        //hide play button
        visiblility('playButtonId', false);
        //Show reset button
        visiblility('resetButtonId', true);
    }, PLAY_DELAY);

}
function onResetClicked() {
    visiblility('playButtonId', true);
    visiblility('resetButtonId', false);
    setHTML("Clear...");
}

const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click', onPlayClicked);
const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click', onResetClicked);