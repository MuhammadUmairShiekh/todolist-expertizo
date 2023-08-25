let btn = document.getElementById("btnAddme");
let remove = document.getElementById("btnClear");
let list = document.getElementById("list");
let inp = document.getElementById("inpt")
const hrElement = document.getElementById("hr")
const minElement = document.getElementById("min")
const secElement = document.getElementById("sec")
const amPmElement = document.getElementById("amPm")
const dateElement = document.getElementById("date")
const monthElement = document.getElementById("month")
const yearElement = document.getElementById("year")
const dayElement = document.getElementById("day")
let din = ["Sunday","Monday","Tuesday","wednesday","Thusday","Friday","Saturday"]
let manth = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Nov","Dec"]
let got = din[ new Date().getDay()]
let mon = manth[ new Date().getMonth()]



setInterval(()=>{
    const time = new Date();
    let hours = time.getHours();
    let amPm  = "AM"
    if(hours > 11 ){
       amPm = "PM" 
    } if(hours > 12){
      hours -=12
    }
    
    
    hrElement.innerHTML=(hours<10?"0":"") + hours;
    minElement.innerHTML =(time.getMinutes()<10?"0":"") + time.getMinutes()     
    secElement.innerHTML = (time.getSeconds()<10?"0":"")+ time.getSeconds()
    dateElement.innerHTML= (time.getDate()<10?"0":"")+ time.getDate()
    monthElement.innerHTML= mon
    yearElement.innerHTML= (time.getFullYear()<10?"0":"")+ time.getFullYear()
    dayElement.innerHTML = got
    amPmElement.innerHTML = amPm 

    //  dayElement.innerHTML= (time.getDay()<10?"0":"")+ time.getDay().toLocaleString('default', { weekday:"long"})
    
},1000)


btn.addEventListener("click",()=>{
    let inputData = inp.value
    if(inputData.length <= 0){
        alert("Assalamualaikum!.....Add your some tasks....  🤗")
    } 
    else {
    let li = document.createElement("li")
    li.innerHTML = `${inp.value} <i class="fa-solid fa-trash"></i> 
   
    `;
     inp.value = "" 
    let edit = document.createElement("b")
     let edit_btn = document.createTextNode("📝")
     edit.setAttribute("class","span1")
     edit.setAttribute("onclick","ediit(this)")     
      edit.appendChild(edit_btn) 
      li.appendChild(edit)
      list.appendChild(li)
    
     li.addEventListener("click",function(){
        this.classList.toggle('done')
        // return true
    })
     
    li.querySelector("i").addEventListener('click',function(){
        li.remove()
    })

    
}
})

function ediit(e){
    let edited = e.parentNode.firstChild.nodeValue
    let prom = prompt("Enter Edit Taxt",edited)
       
    e.parentNode.firstChild.nodeValue = prom
    
}


remove.addEventListener('click',()=> {
    let list1 = document.getElementById("list")
    list1.innerHTML = ""
    document.getElementById("inpt").value = ""
    
})


