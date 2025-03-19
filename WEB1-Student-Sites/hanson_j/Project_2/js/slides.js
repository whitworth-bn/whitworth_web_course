
var nextImage = 'img/slide2.png'
var slideIndex = 1
var myVar = setInterval(function() {change(0)}, 5000);


function change(changer){
    clearInterval(myVar);
    if (changer == 0){
        if(slideIndex == 3) slideIndex = 1;
        else slideIndex++;
    }
    else slideIndex = changer;
    document.getElementById('display').src = 'img/slide' + slideIndex + '.png'
    /*
    document.getElementById('display').src = image;
    if(image == 'img/slide1.png') nextImage = 'img/slide2.png'
    else if(image == 'img/slide2.png') nextImage = 'img/slide3.png'
    else if(image == 'img/slide3.png') nextImage = 'img/slide1.png'
    */
    myVar = setInterval(function() {change(0)}, 5000);
}