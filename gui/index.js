function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = h%12;
  if(h==0) h=12;
  $("#clock").html(h + ":" + m);
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function init(){
  startTime();
  var d = new Date();
  $("#date").html(d.toDateString());
  
}

var counter = 0;



$("#applist").click(function(){

  $(this).toggleClass('rotated');
  $("#appContain").toggleClass("fadeIn");
  $("#appContain").toggleClass("fadeOut");

  if($("#status").text() == "OS Simulator - HOME PAGE"){
    $("#status").text("Applications");

    $("#page2").toggleClass("hide");
    $("#page1").toggleClass("hide");
  }else{
    $("#status").text("OS Simulator - HOME PAGE");
    setTimeout(function()
    {
    //do something special
    $("#page1").toggleClass("hide");
    $("#page2").toggleClass("hide");
  }, 500)
  }
});

$("#teamBtn").click(function(){
    
    $("#status").text("Team Page");
    $("#teamPage").toggleClass("slideIn");
    $("#teamPage").toggleClass("slideOut");
    $("#homePage").toggleClass("hide");
    $("#teamPage").toggleClass("hide");
});
$("#botBtn").click(function () {
  document.getElementById("frame").src = 'https://webchat.botframework.com/embed/OSTESTBOT?s=SniGtUX4upo.cwA.Kfo.hWBJRQ0u-XgT_dbJk2JajovZWiX8Dehl5oC0DZGB3Ko';
  $("#status").text("Bot page");
  $("#botPage").toggleClass("slideIn");
  $("#botPage").toggleClass("slideOut");
  $("#homePage").toggleClass("hide");
  $("#botPage").toggleClass("hide");
});

$("#backBtn").click(function(){
  $("#status").text("OS Simulator - HOME PAGE");
  $("#teamPage").toggleClass("slideIn");
  $("#teamPage").toggleClass("slideOut");
  setTimeout(function()
  {
    $("#homePage").toggleClass("hide");
    $("#teamPage").toggleClass("hide");
  },500)
});
$("#bbackBtn").click(function () {
  $("#status").text("OS Simulator - HOME PAGE");
  $("#botPage").toggleClass("slideIn");
  $("#botPage").toggleClass("slideOut");
  setTimeout(function () {
    $("#homePage").toggleClass("hide");
    $("#botPage").toggleClass("hide");
  }, 500)
});

jQuery.fn.shake = function() {
    this.each(function(i) {
        $(this).css({ "position": "absolute" });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({ left: -15 }, 10).animate({ left: 0 }, 50).animate({ left: 15 }, 10).animate({ left: 0 }, 50);
        }
    });
    return this;
}

$("#Input").keypress(function(e){
  if(e.which == 13){
    if($(this).val() == ""){
      $(this).val("")
      $("body").css({'background' : 'url(../images/back.jpg)' , 'background-position' : 'top' , 'background-size' : 'cover'});
      $("#home").toggleClass("hide");
      $("#loginPage").toggleClass("hide");
    }else{
      $(this).shake();
      $(this).val("")
    }
  }

});

$("#logout").click(function(){
  var a=confirm("Do you really want to logout?");
  if(a){
    $("body").css({'background' : 'url(../images/oldback.jpg)' , 'background-position' : 'top' , 'background-size' : 'cover'});
    $("#home").toggleClass("hide");
    $("#loginPage").toggleClass("hide");
  }
});


$(".col-sm-1 .row img").click(function(){
    $(this).toggleClass('rotated');
});

$(".card-body img").click(function(){
    $(this).toggleClass('rotated');
});
