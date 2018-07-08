var streamSelect ="";
var classSelect = "";
var subSelect ="";

$(".course").click(function(){
    hideAllSection();
    $(".section1").show();
});

$(".crossHolder1").click(function(){
    hideAllSection();
    subSelect="";
    classSelect="";
    streamSelect="";
})

function hideAllSection(){
    $(".section1").hide();
    $(".section2").hide();
    $(".section3").hide();
    
}

$(".nextButton1").click(function(){
    hideAllSection();
    $(".section2").show();
});

$(".back2").click(function(){
    hideAllSection();
    $(".section1").show();
    classSelect="";
    
    
})

$(".nextButton2").click(function(){
    hideAllSection();
    $(".section3").show();

})

$(".back3").click(function(){
    hideAllSection();
    $(".section2").show();
    subSelect="";
})


// tracking the onchange event 
$(".section3 .selectionMenuHolder #select").on('change', function(){
     subSelect = $(this).val();
});

// tracking the click event
$(".section3 .nextButton button.go").click(function(){
       subSelect=  $(".section3 .selectionMenuHolder #select").val();   
       console.log(streamSelect);
       console.log(classSelect);
       console.log(subSelect);

       var urlString=`
       www.pieducate.com/courses?stream=${streamSelect}&class=${classSelect}&subject=${subSelect}
       `;
       console.log(urlString);

})

// tracking the onchange event 
$(".section2 .selectionMenuHolder #select").on('change', function(){
    classSelect = $(this).val();
});

// tracking the click event
$(".section2 .nextButton button.nextButton2").click(function(){
    classSelect =$(".section2 .selectionMenuHolder #select").val();
})

// tracking the onchange event 
$(".section1 .selectionMenuHolder #select").on('change', function(){
    streamSelect = $(this).val();
});

// tracking the click event
$(".section1 .nextButton button.nextButton1").click(function(){
       streamSelect= $(".section1 .selectionMenuHolder #select").val();
       
})


//  slide side menu

$(".crossM").click(function(){
    $(".mobileNav").removeClass("rightSlideShowMobile");
    $(".mobileNav").addClass("rightSlideHideMobile");
});
setTimeout(function(){
    $(".mobileNav").hide();
},1000)

$(".classMobileMenuIcon .threeDot").click(function(){
    //console.log("hi")
    
    $(".mobileNav").removeClass("rightSlideHideMobile");
    $(".mobileNav").show();
    $(".mobileNav").addClass("rightSlideShowMobile");
})


