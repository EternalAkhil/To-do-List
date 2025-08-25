const list = document.getElementById("list")
const task = document.getElementById("ibox")
let ind = 0
console.log("working")
const images=["red","green","gray","white"]
function clea(){
    list.innerHTML=''
    savedata()
}
function addTask() {
    var value = task.value
    if (value == "") {
        alert("add a task")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = `<img class="check" src="images\\square-small.svg" alt="check"><span>${value}</span><img class="cross" src="images\\cross.svg">`
        list.appendChild(li)
    }
    savedata()
    task.value = ""
}
task.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        addTask()
        savedata()
     
    }
  });
list.addEventListener("click", (e) => {
    
    if (e.target.className === "check") {
        if(e.target.src.includes("square-small.svg")){
            e.target.parentElement.style.cssText="text-decoration:line-through;background-color:green;color:white"
            e.target.src="images\\check.svg"
        }
        else{
            e.target.src="images\\square-small.svg"
            e.target.parentElement.style.cssText="text-decoration:none;background-color:white"
        }
       
    }
    savedata()
})
list.addEventListener("click",(e)=>{
    if(e.target.className === "cross"){
        e.target.parentElement.remove();
    }
})
function savedata(){
    localStorage.setItem("data",list.innerHTML)
}
function getdata(){
    list.innerHTML=localStorage.getItem("data")
}
function changeWallpaper(){
    ind++
    let p = images[ind%images.length]
    console.log(p)
    document.getElementsByTagName("body")[0].style=`background-color:${p}`
}
function logout(){
    window.location.href='login.html'
}
getdata()