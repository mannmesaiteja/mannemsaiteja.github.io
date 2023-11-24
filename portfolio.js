document.querySelector(".div111").addEventListener("click",show)
let abt = document.querySelector(".about")


function show() {
    abt.style.display = "block";
    abtme.style.display="none"
    sec.style.backgroundColor=""
    skills.style.display="none"
    projects.style.display="none"
}

document.querySelector(".div111").addEventListener("dblclick",display)
function display(){
    abt.style.display="none"
}



let home=document.querySelector(".home")
let abtme=document.querySelector(".aboutme")
var sec=document.querySelector(".sec1")
let skills=document.querySelector(".skills")//its skill class

home.onclick=showcont
function showcont(){
        abtme.style.display="block"
        sec.style.backgroundColor="lightgrey"
        abt.style.display="none"
        skills.style.display="block"
       
}
document.querySelector(".home").addEventListener("dblclick",display1)
function display1(){
    abtme.style.display="none"
    sec.style.backgroundColor=""
    skills.style.display="none"
}


document.querySelector(".div12").addEventListener("click",display2)
let projects=document.querySelector(".projects")
function display2(){
    abtme.style.display="none"
    sec.style.backgroundColor="lightgrey"
    abt.style.display="none"
    skills.style.display="none"
    projects.style.display="none"
    projects.style.display="block"
}



document.querySelector(".div12").addEventListener("dblclick",display3)
function display3(){
    projects.style.display="none"
    sec.style.backgroundColor=""
}



