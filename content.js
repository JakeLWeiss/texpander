// content.js
$(document).ready(function () {
    //var for marking of the text post thats been collapsed
    var ediv = '.collapsed';

    //for each text post with expando
    $(ediv).each(function () {
        //when mouse is over, expand it
        $(this).mouseover(function () {
            $(this).click();
            $(this).unbind(); //unbind its mouse over so its not super squirly
        });
    });
   
});