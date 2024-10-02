let iStatus = document.querySelector("h5")
let add = document.querySelector("#add")

let  check= 0;


add.addEventListener("click",(e)=>{
    if(check == 0){
       iStatus.innerHTML = "Friends"
       add.innerHTML = "Remove"
       iStatus.style.color = "green"
       check = 1
    }
    else{
        iStatus.innerHTML = "Stranger"
         iStatus.style.color = "red"
       add.innerHTML = "Add Friends"
         check = 0
    }
}) 
