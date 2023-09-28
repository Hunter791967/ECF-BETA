
///*** This is For Results Carousel Slider **********************************************************************/

$(document).ready(function(){
    $('.owl-carousel-basicOne').owlCarousel({
      margin:0,
      loop:true,      
      autoplay:true,  
      item: 4,
      autoplayTimeout:3000,     
      autoplayHoverPause:true,  
      nav:true,       
      responsive:{  
        0:{
          items:1
        },
        600:{
          items:3,
          nav:false,
          margin: 50
        },
        1000:{
          items:4
        }
      }
    })
    
      });

      

      /*** Function to get the current date */

var nowDate = new Date(); 
// var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
var dateSix = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()+' '+'At'+' '+nowDate.getHours()+':'+nowDate.getMinutes(); 
document.getElementById("current_dateSix").innerHTML = dateSix;
