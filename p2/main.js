function Fitalic() {
    if (document.getElementById("demo").style.fontStyle =="normal"){
        document.getElementById("demo").style.fontStyle = "italic";
    }
    else {
        document.getElementById("demo").style.fontStyle = "normal";
    }
}
function Fbold() {

    if (document.getElementById("demo").style.fontWeight =="normal"){
         document.getElementById("demo").style.fontWeight = "bold";
    }
    else {
        document.getElementById("demo").style.fontWeight = "normal";
    }
}
function Funderline() {
    if (document.getElementById("demo").style.textDecoration =="none"){
         document.getElementById("demo").style.textDecoration = "underline";
    }
    else {
        document.getElementById("demo").style.textDecoration = "none";
    }
}
function Fsize() {
document.getElementById("demo").style.fontSize=document.getElementById("size").value;
}
function Ffont(){
    document.getElementById("demo").style.fontFamily=document.getElementById("style").value;
}
function char(champ){
    champ.value=champ.value.replace(/[^a-z]$/,'');
}
/*$(".courses-itmes").hover(function(){
    console.log("hhhhh");
    $(".courses-itmes").css("obacity","0.7");
},function(){
    $(".courses-itmes").css("obacity","1");
});*/

$(".courses-items").hover(function(){
    console.log("in");
    $(this).css("opacity","0.6");
},function(){
    console.log("out");
    $(this).css("opacity","1");
})

$(".img1").hover(function(){
    $(".btn1").show();
},function(){
    $(" .btn1").hide();
})

$(".img2").hover(function(){
    $(".btn2").show();
},function(){
    $(".btn2").hide();
})
$(".img3").hover(function(){
    $(".btn3").show();
},function(){
    $(".btn3").hide();
})

$(".img4").hover(function(){
    $(".btn4").show();
},function(){
    $(".btn4").hide();
})
$(".img5").hover(function(){
    $(".btn5").show();
},function(){
    $(".btn5").hide();
})
$(".img6").hover(function(){
    $(".btn6").show();
},function(){
    $(".btn6").hide();
})
$(".img7").hover(function(){
    $(".btn7").show();
},function(){
    $(".btn7").hide();
})
$(".img8").hover(function(){
    $(".btn8").show();
},function(){
    $(".btn8").hide();
})

























