$(".plusSign").click(function(){
    $(".slideUpMenu").slideToggle();
});

$(".croxxHolder").click(function(){
    $(".slideUpMenu").slideToggle();
});

$(".coxxC").click(function(){
    $(".createClassWrapper").toggle();
});

$(".createNewClass").click(function(){
    $(this).parent(".slideUpMenu").slideToggle();
    $(".createClassWrapper").toggle();
});

$(".croxxHolderSub .croxx").click(function(){
    $(".createSUbjectWrapper").toggle();
});

$(".createNewSubject").click(function(){
    $(".createSUbjectWrapper").toggle();
    $(this).parent(".slideUpMenu").slideToggle();


})


$(".optionHolderChap").click(function(){
    $(".optionOptions").slideToggle();
})