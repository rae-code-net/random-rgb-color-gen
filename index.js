var colorBox = document.querySelector(".colorBox")
var display = document.querySelector('.display')
var h2 = document.querySelector('h2')
function changeColor(){
    let red = Math.floor(Math.random() *256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*255)
    let RGB =   `rgb(${red},${green},${blue})`

    colorBox.style.backgroundColor = RGB
    display.value = RGB
    h2.style.color = RGB
}

function copyToClipBoard(){
    display.select()
    display.setSelectionRange(0,100)
    navigator.clipboard.writeText(display.value)
   if(display.value === ""){
       alert("Color cant be copied")
   }
   else{
    alert("Color has been copied :). Color is : " + display.value)
   }
}