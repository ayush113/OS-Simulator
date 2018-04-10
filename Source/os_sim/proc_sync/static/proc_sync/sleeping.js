function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


var count = 0;
var barb = 0;
var paused = 0;

$("#button").click(async function(){
  if(count == 3)
    alert("The shop is full. Come back later!");
  else{
    if(count == 0){
        $("#wait1").toggleClass("hidden");
        count++;

        if(barb == 0){
          $(".status").html("Waking up the Barber");
          setTimeout(async function(){
            barb = 1;
            $("#sleepBarb").toggleClass("hidden");
            $("#barb").toggleClass("hidden");

            while(count > 0){
                $("#cus").toggleClass("hidden");
                $(".status").html("Haircut Starts : It'll only take a couple of seconds!");
                if(count == 1)
                  $("#wait1").toggleClass("hidden");
                else if(count == 2)
                  $("#wait2").toggleClass("hidden");
                else if (count == 3)
                  $("#wait3").toggleClass("hidden");

                count-- ;
                await sleep(3000);
                $("#cus").toggleClass("hidden");
                $(".status").html("Done Haircut : Next customer please!");
                await sleep(1000);

              }

            $(".status").html("No more customers : Sleep Time!");
            barb = 0;
            await sleep(1000);
            $("#sleepBarb").toggleClass("hidden");
            $("#barb").toggleClass("hidden");
            $(".status").html("The barber is Sleeping!");
          },1500);
        }
    }
    else if(count == 1){
      $("#wait2").toggleClass("hidden");
      count++;
    }
    else if(count == 2){
      $("#wait3").toggleClass("hidden");
      count++;
    }
  }
});
