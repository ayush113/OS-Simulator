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
  $("#page1").toggleClass("hide");
  $("#page2").toggleClass("hide");
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
    if($(this).val() == "password"){
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
  $("body").css({'background' : 'url(../images/oldback.jpg)' , 'background-position' : 'top' , 'background-size' : 'cover'});
  $("#home").toggleClass("hide");
  $("#loginPage").toggleClass("hide");
});
