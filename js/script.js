
const slides = document.querySelectorAll(".slide")
const slider = document.querySelector("#slider")

const diaryType = document.querySelector("#diary-type")
const capaName= document.querySelector("#capa-name")
const qtt = document.querySelector("#quantity")
const purchaseValue =  document.querySelector("#purchase-value span")
let image = 1
let intervalID

const createImage = ()=>{
    const slide = document.createElement("div")
    slide.classList.add("slide")
    const img = document.createElement("img")
    img.width = "1000"

    slide.appendChild(img)
    slider.appendChild(slide)


    intervalID=  setInterval(()=>{
        img.src = `img/img${image}.jpeg`

        image++
        if(image > 21){
            image = 1
        }
    },3000)

    
slider.addEventListener("mousedown",()=>{
    clearInterval(intervalID)
    imageCurrent = image
})
slider.addEventListener("mouseup",()=>{
    intervalID=  setInterval(()=>{
        img.src = `img/img${image}.jpeg`

        image++
        if(image > 21){
            image = 1
        }
    },3000)

})


}

createImage()
qtt.addEventListener("change",()=>{

    const quantityDiary = +qtt.value
    const diaryValue = 39.90



    purchaseValue.innerText = (quantityDiary * diaryValue).toFixed(2).replace(".",",")

})