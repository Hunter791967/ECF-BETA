// This fucntion is for toggle nav menu for mobile
const burgerToggle = document.querySelector('.burger-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

burgerToggle.addEventListener('click' , () =>{
  mobileMenu.classList.toggle('menu-open');
  burgerToggle.classList.toggle('burger-toggle-clicked')
})
/****************************************************************************************************************/

// This fucntion is for open and close sub menu
let selects = document.querySelectorAll(".select");

selects.forEach((select) => {
  select.addEventListener("click", function (e) {
    let sibling = select.nextElementSibling;

    // Nested loop for removing caret-rotate class from all and set sub Menu display none
    selects.forEach((item) => {
      item.nextElementSibling.style.display = "none";
      //   remove class "caret-rotate" except for the currently clicked item
      item != select && item.querySelector('.caret').classList.remove("caret-rotate")
    });
    //then toggle the "caret-rotate" class of clicked item
    select.querySelector('.caret').classList.toggle("caret-rotate");
    if (select.querySelector('.caret').classList.contains("caret-rotate")) {
      sibling.style.display = "block"
    } else {
      select.querySelector('.caret').classList.remove('caret-rotate');
    }
  });
});

/****************************************************************************************************************/

const childrens = document.querySelectorAll(".selected-menu .select");
  

childrens.forEach((child) => { 
  child.addEventListener('click', function(e) {
    
    if(child.classList.contains('active')) {
      
      child.classList.remove('active');
      
    } else {
      childrens.forEach(childTwo => {
        
        childTwo.classList.remove('active');
        
       
        });
      e.currentTarget.classList.add("active");
      
    }
    
  });
});

/****************************************************************************************************************/

// This fucntion is for open and close Grand-child menu
let mobileItems = document.querySelectorAll(".item-menu-mobileTwo");

mobileItems.forEach((mobItem) => {
  mobItem.addEventListener("click", function (e) {
    let sibling = mobItem.nextElementSibling;

    // Nested loop for removing caret-rotate class from all and set sub Menu display none
    mobileItems.forEach((item) => {
      item.nextElementSibling.style.display = "none";
      //   remove class "caret-rotate" except for the currently clicked item
      item != mobItem && item.querySelector('.caretTwo').classList.remove("caretTwo-rotate")
    });
    //then toggle the "caret-rotate" class of clicked item
    mobItem.querySelector('.caretTwo').classList.toggle("caretTwo-rotate");
    if (mobItem.querySelector('.caretTwo').classList.contains("caretTwo-rotate")) {
      sibling.style.display = "block"
    } else {
      mobItem.querySelector('.caretTwo').classList.remove('caretTwo-rotate');
    }
  });
});

/****************************************************************************************************************/

const grandChildrens = document.querySelectorAll(".sub-menu-mobile .item-menu-mobileTwo");
  

grandChildrens.forEach((child) => { 
  child.addEventListener('click', function(e) {
    
    if(child.classList.contains('active')) {
      
      child.classList.remove('active');
      
    } else {
      grandChildrens.forEach(childTwo => {
        
        childTwo.classList.remove('active');
        
       
        });
      e.currentTarget.classList.add("active");
      
    }
    
  });
});

/****************************************************************************************************************/

