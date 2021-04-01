

window.onload = () => {
    console.log("Page load")
    loadFood()
}

function submitFood(){
    console.log("button has been pressed.")
    let food = document.getElementById("foodInput").value
    console.log(food)
    localStorage.setItem("favfood", food)
    loadFood()
}

function loadFood(){
    const food = localStorage.getItem("favfood")
    console.log(food)
    if (food){
        document.getElementById("foodDisplay").innerHTML = "My favorite food is: " + food
    }  
}

