/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Chad Kimble
      Date:   9/5/2026

      Filename: project03-01.js
*/

// collection of all menu item checkboxes on the form
var menuItems = document.getElementsByClassName("menuItem");

// attach a click event listener to each menu item checkbox
for (var i = 0; i < menuItems.length; i++) {
   menuItems[i].addEventListener("click", calcTotal);
}

// calculates the total cost of the selected menu items
function calcTotal() {
   var orderTotal = 0;

   for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].checked) {
         orderTotal += Number(menuItems[i].value);
      }
   }

   document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }