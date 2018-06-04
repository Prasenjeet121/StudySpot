
var htmlContentToInsert = `
<div class="fader" onclick="faderHide()"></div>
<div class="slideSideMenu animated once slideInLeft">
    <div class="listMenuCon">
           <div class="closeAndLogoHolder">
               
               <div class="middle">
                 <div class="profileHolder">
                 <span class="profileimage"><img src="../img/logo.png"></span>
                 <span class="nameHolder">Prasenjeet Kumar</span>
                 
                 </div>
                 <div class="textprofile">
                 <span class="text"></span>
                 </div>
               
               </div>
               <div class="rightSide">
                   <div class="croxx" onclick="closeSideSlide()">X</div>
               </div>
           </div>
           <div class="menuMobileHolder">
               <div class="menu menuCurrent"><span><a href="">home</a></span></div>
               <div class="menu"><span><a href="">Blog</a></span></div>

               <div class="menu"><span><a href="">Subjects</a></span>
               
               </div>

               <div class="menu"><span><a href="">Contact us</a></span></div>
            
               <div class="menu"><span><a href="">Price</a></span></div>

               <div class="menu"><span><a href="">Sign Up</a></span></div>

               <div class="menu"><span><a href="">Login</a></span></div>

               
           </div>
                    
                   
               
    </div>
        
</div>

    
`;

var navMobileAppend = `<div class="mobileNav">
<div class="left">
    <span class="logoHolder">
        <img src="./img/logo.png" alt="">
    </span>
</div>
<div class="right">
    <span class="menuIcoMobile" onclick="showSideSlide()">||||</span>
</div>
</div>`;


var desktopNav = `
<div class="desktopNav">
<div class="left">
    <span class="logo">
        <img src="./img/logo.png" alt="">
    </span>
</div>
<div class="right">
    
        <div class="deskNav"><a href="">Home</a></div>
        <div class="deskNav"><a href="">Blog</a></div>
        <div class="deskNav DropDownSub"><a href="">Subjects</a>


        <div  class="dropDownListSUbject">
        
          <div class="topTriangle">
          <img src="../img/down.png">
          </div>
          <div class="dropDownContent">
            <div class="headerDropDown">
              <div class="backButton">back</div>
              <div class="HeadingTextDrop">Choose Board</div>
            </div>
            <div class="mainContent">
            
                <div class="listDropDownSub"><span class="textListDropDown">Publishers</span></div>

                <div class="listDropDownSub"><span class="textListDropDown">Publishers</span></div>

                <div class="listDropDownSub"><span class="textListDropDown">Publishers</span></div>

                <div class="listDropDownSub"><span class="textListDropDown">Publishers</span></div>

                <div class="listDropDownSub"><span class="textListDropDown">Publishers</span></div>

                <div class="listDropDownSub"><span class="textListDropDown">Publishers</span></div>
                
            </div>
          </div>
          
        </div>


        </div>
        <div class="deskNav"><a href="">Contact Us</a></div>
        <div class="deskNav"><a href="">Price</a></div>
        <div class="deskNav signup"><a href="">Sign Up</a></div>
        <div class="deskNavL login"><a href=""><button>Log In</button></a></div>
       
</div>

</div>
`;

function faderHide(){
    $('.fader').on('click', function(){
        closeSideSlide()
    })
}


function closeSideSlide(){
    $('.slideSideMenu').removeClass('slideInLeft');
    $('.slideSideMenu').addClass('navSlidePos');
    setTimeout(()=>{
        $('.mobileNavHolderSlide').html('');
    },985)
    
}

function showSideSlide(){
   $('.mobileNavHolderSlide').append(htmlContentToInsert);
}

 $(window).resize(function() {
    if ($(window).width() < 960) {
       //console.log('Less than 960');
    }
   else {
      //console.log('More than 960');
   }
  });
  if ($(window).width() > 800) {
    $('.navHolder').html(desktopNav);
 }else{
    $('.navHolder').html(navMobileAppend);
 }


  $(window).resize(function() {
    if ($(window).width() > 800) {
       $('.navHolder').html(desktopNav);
    }
   else {
    $('.navHolder').html(navMobileAppend);
    console.log('yes');
   }
  });