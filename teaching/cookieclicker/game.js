console.log("game.js is loaded");

let cookieCount = 0;
let cookiesPerClick = 1;
let upgradeClickCost = 10;

function clickCookie(){
    cookieCount += cookiesPerClick;
    document.getElementById("count").innerHTML = cookieCount;

    // make the cookie expand on click
    let cookie = document.getElementById("cookie");

    // make the cookie bounce back after 0.1 seconds
    setTimeout(cookieBounce1, 100);
}

function upgradeClick(){
    console.log("Upgrading click...")
    
    if (cookieCount >= upgradeClickCost){
        cookiesPerClick += 1;
        cookieCount -= upgradeClickCost;
        document.getElementById("count").innerHTML = cookieCount;
        document.getElementById("cookiesPerClick").innerHTML = cookiesPerClick;
        
        // make the cost of upgrading higher each time
        // Big increase in cost
        upgradeClickCost = Math.round(Math.pow(upgradeClickCost, 1.1));
        // Medium increase in cost
        // upgradeClickCost = Math.round(upgradeClickCost*1.1);
        // Small increase in cost
        // upgradeClickCost += 1;
        document.getElementById("upgradeClickCost").innerHTML = upgradeClickCost;

    }    
}

function cookieBounce1(){
    // made the cookie go back to original size
    let cookie = document.getElementById("cookie")
    cookie.style.transform = "scale(0.95)";

    console.log("timer hit")

    setTimeout(cookieBounce2, 100)
}

function cookieBounce2(){
    let cookie = document.getElementById("cookie");
    cookie.style.transform = "scale(1.1)";
}

function save(){
    localStorage.setItem("count", cookieCount);
}

window.onload = () => {
    let cookie = document.getElementById("cookie");
    cookie.addEventListener("mouseenter", function(){
        console.log("mouse entered cookie")
        cookie.style.transform = "scale(1.1)";
    });

    cookie.addEventListener("mouseleave", function(){
        cookie.style.transform = "scale(1)";
    });

    // loading in variables from the saved stuff
    if (localStorage.getItem("count")){
        cookieCount = parseInt(localStorage.getItem("count"));
        document.getElementById("count").innerHTML = cookieCount;  
    }
    
}

