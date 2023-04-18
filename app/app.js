import { changeRoutes, wordArray } from "../model/model.js";
//imports function from model.js

function initListener(){
    let btn
    $("nav a").on("click", function(e){
        //btnID = e.currentTarget.id;
        btnID = $(this).attr("id");
        console.log(wordArray[btnID]);
    })
}

//function = listening for when an "a" link is clicked


function initURLListener() {
    $(window).on("hashchange", changeRoutes);
    changeRoutes();
}

$(document).ready(function(){
    //initListener()
    console.log(wordArray);
    initURLListener();
});