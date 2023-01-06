const currColor=document.querySelector(".currentColor")
// console.log(currColor)
const changeColorButton=document.querySelector(".changeClass ")
console.log(changeColorButton)

const selectBody = document.body
console.log(selectBody)

function randomColorGenerator(){
    const red1= Math.floor(Math.random()*255)
    const red2 = Math.floor(Math.random()*255)
    const red3 = Math.floor(Math.random()*255)
    const green1 = Math.floor(Math.random()*255)
    const green2 = Math.floor(Math.random()*255)
    const green3 = Math.floor(Math.random()*255)
    const blue1 = Math.floor(Math.random()*255)
    const blue2 = Math.floor(Math.random()*255)
    const blue3 = Math.floor(Math.random()*255)
    const randomColor1=`rgb(${red1},${green1},${blue1})`
    const randomColor2=`rgb(${red2},${green2},${blue2})`
    const randomColor3=`rgb(${red3},${green3},${blue3})`
    // return `${randomColor1},${randomColor2}`
    return [randomColor1,randomColor2,randomColor3]
    
}

// console.log(randColor)

changeColorButton.addEventListener("click",()=>{
    const randColor = randomColorGenerator()
      selectBody.style.backgroundColor=randColor[0]
      currColor.style.backgroundColor=randColor[1]
      changeColorButton.style.backgroundColor=randColor[2]
      currColor.textContent=`Color Code: ${randColor[0]}`
})