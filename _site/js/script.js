// Data types
// "hello world" - String
// 1234, -43123 - Integers
// 0.12, 1.273 - Floats
// true, false - Booleans

// Storing data -
// var name = "Lizzie";

// Functions
// actions that we can use on our site
// some are built into libraries

// prompt ("I'm an annoying pop up box");
// alert ( "" )

// Structuring a function:

  // instructions to carry out


// jquery


  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoplay:true,
  });


   $(".dropdown-nav").click(function(){
     $(this).children(".dropdown-content").slideToggle();
   });


});


// $ means talk to jquery library
// first set of brackets defines the element you want to interact with
// .css means 'alter the css'
//  .on means act on, when an action happens
// $("a").on("click", function() {
//
//   // $("body").css("background-color", "yellow");
//   // this line changes properties
//   // $("#sweet-box").show();
//   // $("#sweet-box").fadeToggle();
//   // add or remove classes
//
//   // $("#sweet-box").toggleClass("rainbow");
// });
//
//
// // Image slider
// //  step 1 - create a variable to keep count of how many photos are hidden
//
// var numberOfHiddenImages = 0;
// // step 2 - decide how long to display each image
//
// setInterval( function(){
//   // step 3 - show/hide photos
//   // if variable is equal to 0
//   if (numberOfHiddenImages === 0) {
//     //hide the top photo
//     $(".travel3").fadeOut();
//     numberOfHiddenImages = 1;
//
//   } else if (numberOfHiddenImages === 1) {
//     $(".travel2").fadeOut ();
//     numberOfHiddenImages = 2;
//
//   } else if (numberOfHiddenImages === 2) {
//     // fade photo 3 and photo 2 back in
//     $(".travel3, .travel2").fadeIn();
//     numberOfHiddenImages = 0;
//   }
//
//
// }, 4000);
//
// });
// end of jquery
