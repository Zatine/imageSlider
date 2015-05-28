var slider = document.querySelectorAll('.img-slider'),
    images = document.querySelectorAll('.img-item'),
    imageWidth = images[0].clientWidth;

    slider[0].style.width = imageWidth * images.length + "px";

        setTimeout(function(){
            function moveLeft(item){
                var currentMargin = parseInt(item.style.marginLeft) ? parseInt(item.style.marginLeft) : 0;
                var max = -1 * (imageWidth - 100);
                var min = -50;
                if(currentMargin < max){
                item.style.marginLeft = currentMargin - 2 + "px";
                }
                else{
                    item.style.marginLeft = currentMargin - 10 + "px";
                }
                if(currentMargin < (-1 * imageWidth)){
                    clearInterval(moveImage);
                }
            }
            var moveImage = setInterval(function(){moveLeft(slider[0]);}, 1);}, 1000);

