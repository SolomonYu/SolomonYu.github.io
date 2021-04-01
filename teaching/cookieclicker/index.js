console.log("Hello!")

const slides = document.getElementsByClassName("hiddenSlide");
console.log(slides)
let index = 0

function buttonClick(){
    console.log("The button has been clicked!")
}

function changeSlide(number){
    console.log("changing slides by:" + String(number))

    //remove the current active slide
    slides[index].setAttribute("id", "")

    index += number
    if (index < 0){
        index = slides.length-1 // slides.length -1 is the last slide
    }
    if (index > slides.length-1){
        index = 0
    }
    console.log(index)

    // new
    slides[index].setAttribute("id", "activeSlide")
}

// new
// change slides every 4 seconds
function startSlide(){
    console.log("automatically changing slides")
    changeSlide(1)
    setTimeout(startSlide, 4000);
}

window.onload = () => {
    console.log("start of on load!")
    setTimeout(startSlide,4000);
}

