$('.shareButtonImg').click(function(){
    $('.socialCon').slideToggle();
});
$('.socialCon').ready(function(){
    $('.socialCon').hide();
});


 var statusOfBorderImageHolder=false;
 $(".topicsCoveredUpcoming").ready(function(){
     $(".topicsCoveredUpcoming").hide();
 })


$('.imageHolder').click(function(){
    
    $(this).parent(".upcomingVid").toggleClass("upcomingVid1");
    $(this).parent(".upcomingVid").siblings(".topicsCoveredUpcoming").slideToggle();
})

$(".topicHiddenCover").ready(function(){
     $(".topicHiddenCover").hide();
 })

$('.imageHolder').hover(function(){
    $(this).children("img").toggleClass("opacityImage");
    $(this).children(".topicHiddenCover").toggle();
})