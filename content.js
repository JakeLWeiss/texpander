// content.js
$(document).ready(function () {
    //var for marking of the text post thats been collapsed
    var ediv = '.collapsed';

    //for each text post with expando
    $('.top-matter').mouseenter(function () {
        //use this one for slecting full div, maybe a little annoying tho...? and change to $('thing').mouseenter above
        //$(this).find('.top-matter').find(ediv).each(function () {
   
        //when mouse is over the post, expand it with click
        $(this).find(ediv).each(function () { 
            $(this).click();
            //unbind its mouse over so its not super squirly
            $(this).unbind(); 
        });
    });
   
});