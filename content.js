// content.js
 
$(document).ready(function () {
    var i = 0;
    $('.expando-button').each(function () {
        $(this).attr('id', i);
        i++;
    });
    
   
    for (k = 0; k < i; k++) {
        $('#' + k).click();
        $('.expando').attr('style', 'type: block');
               
    }
});