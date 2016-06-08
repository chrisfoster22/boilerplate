// From main.js


//this stuff has yet to be refactored as there is still more to do. Let me know if you have any questions.


$.noConflict();jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.



  // Date of Birth Placeholder 
    $('body').on('focus', "#dob", function(){
      $(this).attr('placeholder', 'MM/DD/YYYY');
    });

    $('body').on('blur', "#dob", function(){
      $(this).attr('placeholder', 'Date of Birth');
    });


}); //end noConflict



// Code that uses other library's $ can follow here.





