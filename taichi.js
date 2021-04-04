
    'use strict';

    const images =['001.jpg','../試作品/002.jpg','../試作品/中村菓子舗3.jpg','../試作品/R2efcc720d4066ec8b3b194005d90a134.jpeg'];
    let current=0;
  
    function changeImages(num) {
        if(current+num >= 0&current+num<images.length) {
            current += num;
            document.getElementById('mainimg').src=images[current]
            
        }
        };

    document.getElementById('prev').onclick=function(){
        changeImages(-1);
    };

    document.getElementById('next').onclick=function(){
        changeImages(+1);
    };
