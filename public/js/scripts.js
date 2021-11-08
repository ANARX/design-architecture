$(document).ready(function () {
    $(`.nav-links`).click(function (){
        let elementClick = $(this).attr('href'), {top: destination} = $(elementClick).offset();
        jQuery('html:not(:animated),body:not(:animated)').animate({
            scrollTop: destination
        }, 1000);
        return false;
    })
});

$(document).ready(function(){

    $(function (){
        $("#back-top").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 700){
                $("#back-top").fadeIn();
            } else{
                $("#back-top").fadeOut();
            }
        });

        $("#back-top a").click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
});
