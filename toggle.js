const button =document.getElementById("btn");
function toggleBtn(){
    console.log("click");
    if(button.classList[0]==="on"){
        button.classList.remove("on");
        button.classList.add("off");
        button.innerHTML="NIGHT MODE";
        document.body.style.backgroundColor="black"
    }
    else{
        button.classList.remove("off");
        button.classList.add("on");
        button.innerHTML="LIGHT MODE";
        document.body.style.backgroundColor="white"
    }
}

button.addEventListener("click",toggleBtn);
