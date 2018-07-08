
// variables here 

var   borderManage=true;
var isLogin = false;
$(".socialShareT img").click(function(){
    $(".socialHolderAllT").slideToggle(700);
});
// hide the social share options
$(".socialHolderAllT").ready(function(){
    $(".socialHolderAllT").hide();
});

$(".topicNameHover").ready(function(){
    $(".topicNameHover").hide();
})

$(".leftT").hover(function(){
    $(this).children("img").toggleClass("opcaityCon");
    $(this).children(".topicNameHover").toggle();
});


$(".leftT").click(function(){
    $(this).parent(".topicImgHeadingHolderT").siblings(".topicsCoveredHolderListT").slideToggle();
   
});


$(".topicCivered").click(function(){
    borderManage = false;
    $(this).parent().parent().parent().parent(".topicImgHeadingHolderT").siblings(".topicsCoveredHolderListT").slideToggle(function(){
        
    });
    
   
});


$(".progressBar").click(function(){
    borderManage = false;
    $(this).parent().parent().parent().parent(".topicImgHeadingHolderT").siblings(".progressHolderT").slideToggle();
    
})


$(".addToWatchLater").click(function(){
    borderManage = false;
    if(isLogin){

    }else{
        $(this).parent().parent().parent().parent(".topicImgHeadingHolderT").siblings(".loginSignupHolder").slideToggle();
    }
   
    
});

$(".addToFav").click(function(){
    borderManage = false;
    if(isLogin){

    }else{
        $(this).parent().parent().parent().parent(".topicImgHeadingHolderT").siblings(".loginSignupHolder").slideToggle();
    }
   
    
})
























$(".topicsCoveredHolderListT").ready(function(){
    $(".topicsCoveredHolderListT").hide();
});

$(".progressHolderT").ready(function(){
    $(".progressHolderT").hide();
});

$(".loginSignupHolder").ready(function(){
    $(".loginSignupHolder").hide();
});


