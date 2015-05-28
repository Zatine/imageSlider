var slider = document.getElementsByClassName('img-slider'),
    images = document.getElementsByClassName('img-item'),
    imageWidth = images[0].clientWidth,
    start = images[0].cloneNode(true);

    //Clones the first image to the end of the slider to make for a smooth transition
    slider[0].appendChild(start);

    //Sets the slider width to the sum of all the images, so they end up next to each other
    var sliderWidth = imageWidth * images.length;
    slider[0].style.width = sliderWidth + "px";

//Animation
setInterval(function() {
    console.log("Hej");
        function moveLeft(item) {
            var currentMargin = parseInt(item.style.marginLeft) ? parseInt(item.style.marginLeft) : 0;
            //var max = (-1 * (imageWidth - 100));

            //Reset and cancel movement at the end of the last picture
            if(-1 * (sliderWidth - imageWidth) >= (currentMargin)){item.style.marginLeft = 0 + "px"; clearInterval(moveImage);}

            else{
               // if (currentMargin < max) {
                //    item.style.marginLeft = currentMargin - 2 + "px";
                //}
                //else {
                    item.style.marginLeft = currentMargin - 10 + "px";
               // }

                if (currentMargin % (-1 * imageWidth) == 0) {
                    clearInterval(moveImage);
                }
            }
        }

        var moveImage = setInterval(function () {moveLeft(slider[0]);}, 1);
}, 2000);