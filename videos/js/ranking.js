// Define Varaiables for LIs
let accIcon = document.getElementById("account_icon");
let aboutIcon = document.getElementById("about-icon");
let workIcon = document.getElementById("work-icon");
let mailIcon = document.getElementById("mail-icon");
let overIcon = document.getElementById('over-icon');
// Define Variables for Sections
let manageAccount = document.getElementById('manageAccount');
let notification = document.getElementById('notification');
let favList = document.getElementById('favList');
let ordersTracking = document.getElementById('ordersTracking');
let overFifty = document.getElementById('overFifty');
//define array for the whole LIs in order to make ope for them
let rankButton = document.querySelectorAll('.rank_button');
//define array for the whole sections in order to make loope for them
let jsHidden = document.querySelectorAll('.js_hidden');
// Make The first function when Li Click
accIcon.addEventListener("click", function() {
  jsHidden.forEach((target) => {
    target.style.display="none";
  })
  manageAccount.style.display="block";
    backRender();
  this.style.backgroundImage = "linear-gradient(to left,#649632,#649632)";
});

// Make The second function when Li Click
aboutIcon.addEventListener("click", function() {
  jsHidden.forEach((target) => {
    target.style.display="none";
  })
  notification.style.display="block";
   backRender();
  this.style.backgroundImage = "linear-gradient(to left,#649632,#649632)";
});

// Make The third function when Li Click
workIcon.addEventListener("click", function() {
  jsHidden.forEach((target) => {
    target.style.display="none";
  })
  favList.style.display="block";
   backRender();
  this.style.backgroundImage = "linear-gradient(to left,#649632,#649632)";
});

// Make The fourth function when Li Click
mailIcon.addEventListener("click", function() {
  jsHidden.forEach((target) => {
    target.style.display="none";
  })
  ordersTracking.style.display="block";
   backRender();
  this.style.backgroundImage = "linear-gradient(to left,#649632,#649632)";
});

// Make The fivs function when Li Click
overIcon.addEventListener("click", function() {
  jsHidden.forEach((target) => {
    target.style.display="none";
  })
  overFifty.style.display="block";
    backRender();
    this.style.backgroundImage = "linear-gradient(to left,#649632,#649632)";
});

// make a function for LI color rendring 
function backRender () {
  rankButton.forEach((rank)=>{
    rank.style.backgroundImage = "linear-gradient(to left,#210e7f,#080808)";
  });
}

//***************************************************************/

/****************************************************************************************************************/

/*** Table Functions ********************************************************************************************/

$(document).ready(function() {
  // DataTable initialisation
  $('#example').DataTable({
    "paging": true,
    "autoWidth": true,
      });
});

$(document).ready(function() {
  // DataTable initialisation
  $('#exampleTwo').DataTable({
    "paging": true,
    "autoWidth": true,
      });
});

$(document).ready(function() {
  // DataTable initialisation
  $('#exampleThree').DataTable({
    "paging": true,
    "autoWidth": true,
      });
});

$(document).ready(function() {
  // DataTable initialisation
  $('#exampleFour').DataTable({
    "paging": true,
    "autoWidth": true,
      });
});

$(document).ready(function() {
  // DataTable initialisation
  $('#exampleFive').DataTable({
    "paging": true,
    "autoWidth": true,
      });
});
/*******************************************************************************************************/

/*** Function to get the current date */

var nowDate = new Date(); 
// var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
var dateOne = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()+' '+'At'+' '+nowDate.getHours()+':'+nowDate.getMinutes(); 
var dateTwo = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()+' '+'At'+' '+nowDate.getHours()+':'+nowDate.getMinutes(); 
var dateThree = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()+' '+'At'+' '+nowDate.getHours()+':'+nowDate.getMinutes(); 
var dateFour = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()+' '+'At'+' '+nowDate.getHours()+':'+nowDate.getMinutes(); 
var dateFive = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()+' '+'At'+' '+nowDate.getHours()+':'+nowDate.getMinutes(); 
document.getElementById("current_dateOne").innerHTML = dateOne;
document.getElementById("current_dateTwo").innerHTML = dateTwo;
document.getElementById("current_dateThree").innerHTML = dateThree;
document.getElementById("current_dateFour").innerHTML = dateFour;
document.getElementById("current_dateFive").innerHTML = dateFive;

/****************************************************************************************************************/
// This Function is to selcet what is shown when we choose any selection from different table-view
// Selects all divs with the .js-target class.
const targets = document.querySelectorAll(".table_view");

/**
 * Show the target that has an id that matches
 * with the hash value in the URL and hides the
 * ones that don't match.
 */
const toggleTargets = () => {
  const { hash } = window.location;
  if (hash === "") {
    return;
  }
  /**
   * Loop over each target and check if the id matches
   * the hash value. If it does, then remove the hidden
   * class, if not, add the hidden class.
   */
  targets.forEach((target) => {
    if (`#${target.id}` === hash) {
      target.classList.remove("js-hiddenOne");
      backRender();
    } else {
      target.classList.add("js-hiddenOne");
      }
  });
};
/**
 * Immediately execute the toggleTargets function when
 * the script is loaded.
 */
toggleTargets();

/**
 * Whenever the hash changes when on the page, call toggleTargets
 * again to re-evaluate if the hash matches any div.
 */
window.addEventListener("hashchange", toggleTargets);

/****************************************************************************************************************/