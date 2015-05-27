var slider = document.querySelectorAll('.img-slider'),
    images = document.querySelectorAll('.img-item'),
    imageWidth = images[0].clientWidth;


function moveLeft(item){
    var currentMargin = parseInt(item.style.marginLeft) ? parseInt(item.style.marginLeft) : 0;
    item.style.marginLeft = currentMargin - 1 + "px";

}

setInterval(function(){moveLeft(slider[0]);}, 10);