// content.js

$(document).ready(function () {
    var i = 0;
    //sets a div id for all expando buttons on page load
    $('.expando-button').each(function () {
        $(this).attr('id', i);
        i++;
    });
    
   //clicks the expando
    $('expando-button').click();


   /* for (k = 0; k < i; k++) {
        $('#' + k).click();
        $('.expando').attr('style', 'type: block');
               
    }
    */
});