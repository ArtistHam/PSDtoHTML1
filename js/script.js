menu.onclick = function myFunction() {
    var x = document.getElementById('myTopNav');

    if(x.className === "topNav"){
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
};

$(document).ready(function(){
        $("#home").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $("#about").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $("#services").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $("#portfolio").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $("#test").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $("#contact").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
        });
        
    });
    

