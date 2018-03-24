var s=new Array(0,0,0);
var c=new Array(0,0);
var portS,portC;
var servAddr;
function load(){
    document.getElementById("fromClient").disabled=true;
    document.getElementById("fromClient").value="";
    document.getElementById("toClient").disabled=true;
    document.getElementById("toClient").value="";
    document.getElementById("sendClient").disabled=true;
    document.getElementById("sendClient").value="";

    document.getElementById("fromServer").disabled=true;
    document.getElementById("fromServer").value="";
    document.getElementById("toServer").disabled=true;
    document.getElementById("toServer").value="";
    document.getElementById("sendServer").disabled=true;
    document.getElementById("sendServer").value="";
}
function toggle(){
    var x = document.getElementById("configure");
    if (x.style.display !== 'block') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toggleC(){
    var x = document.getElementById("configureC");
    var y=document.getElementById("toggleC");
    if (x.style.display !== 'block') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if(c[1]==0){
        c[1]=1;
        y.style.background="rgb(50,205,50)";
    }
    else{
        c[1]=0;
        y.style.background="rgb(211,211,211)";
    }
    
}
function btnsockets(){
    var x=document.getElementById("btnsockets");
    if(s[0]==0){
        s[0]=1;
        x.style.background="rgb(50,205,50)";
    }
    else{
        s[0]=0;
        x.style.background="rgb(211,211,211)";
    }
}

function btnconfigs(){
    var x=document.getElementById("btnconfigs");
    var y=document.getElementById("serverAddr");
    y.value="inet_addr(\"\")";
    if(s[1]==0){
        s[1]=1;
        x.style.background="rgb(50,205,50)";
    }
    else{
        s[1]=0;
        x.style.background="rgb(211,211,211)";
    }
}
function btnbind(){
    var x=document.getElementById("btnbind");
    portS=document.getElementById("portServ");
    servAddr=document.getElementById("serverAddr");
    if(portS.value==""||servAddr.value=="inet_addr(\"\")"){
        alert("Port address or Server address cant be left empty");
    }
    else{
        if(s[2]==0){
            s[2]=1;
            x.style.background="rgb(50,205,50)";
        }
        else{
            s[2]=0;
            x.style.background="rgb(211,211,211)";
        }
    }
    checkall();
}
function checkall(){
    var x=document.getElementById("image");
    var y=1;
    for(i=0;i<3;i++){
        if(s[i]!=1)
            y=0;
    }
    if(y==1){
        x.style.background="green";
        enablefieldsS();
    }
    else{
        x.style.background="red";
        disablefieldsS();
    }
}
function enablefieldsS(){
    document.getElementById("fromClient").disabled=false;
    document.getElementById("toClient").disabled=false;
    document.getElementById("sendClient").disabled=false;
}
function disablefieldsS(){
    document.getElementById("fromClient").disabled=true;
    document.getElementById("toClient").disabled=true;
    document.getElementById("sendClient").disabled=true;
}

//client side
function btnsocketc(){
    var x=document.getElementById("btnsocketc");
    if(c[0]==0){
        c[0]=1;
        x.style.background="rgb(50,205,50)";
    }
    else{
        c[0]=0;
        x.style.background="rgb(211,211,211)";
    }
}
function checkallC(){
    var x=document.getElementById("image1");
    portS=document.getElementById("portServ");
    portC=document.getElementById("portClient");
    var y=1;
    for(i=0;i<2;i++){
        if(c[i]!=1)
            y=0;
    }
    if(y==1){
        if(portC.value!=portS.value){
            alert("Slient port and Server port doesn't match");
            x.style.background="red";
            disablefieldsC();
        }else{
            x.style.background="green";
            enablefieldsC();
        }
    }
    else{
        x.style.background="red";
        disablefieldsC();
    }
}
function enablefieldsC(){
    document.getElementById("fromServer").disabled=false;
    document.getElementById("toServer").disabled=false;
    document.getElementById("sendServer").disabled=false;
}
function disablefieldsC(){
    document.getElementById("fromServer").disabled=true;
    document.getElementById("toServer").disabled=true;
    document.getElementById("sendServer").disabled=true;
}
function msgtoClient(){
    var x=document.getElementById("toClient");
    var y=x.value;
    var z=document.getElementById("fromServer");
    if(z.disabled)
        alert("Connection is not setup!");
    else{
        z.value=y;
        x.value="";
    }
}
function msgtoServer(){
    //console.log("called");
    var x=document.getElementById("toServer");
    var y=x.value;
    var z=document.getElementById("fromClient");
    z.value=y;
    x.value="";
    if(z.disabled)
        alert("Connection is not setup!");
    else{
        z.value=y;
        x.value="";
    }
}
function memSort(e){
    var key=e.keyCode || e.which;
     if (key==13){
        checkallC();
     }
   }
function enableConn(){
    var x=document.getElementById("enableConn");
    x.innerHTML="Press Enter after entering port to setup connection";
}