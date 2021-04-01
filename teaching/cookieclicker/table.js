console.log("loaded table js");

window.onload = () => {
    console.log("page is loaded");
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var data1 = row.insertCell(0);
    var data2 = row.insertCell(1);
    var data3 = row.insertCell(2);
    data1.innerHTML = 3;
    data2.innerHTML = "Joe";
    data3.innerHTML = "Jan 3";
    table.appendChild(row);


    document.getElementById("table").addEventListener("click", function(){
        console.log("event happened!");
        // alert("Event happened!");
        document.getElementById("table").style.color = "red";
    });

    document.getElementById("table").addEventListener("mouseover", function(){
        document.getElementById("table").style.color = "blue";
    });

    document.getElementById("table").addEventListener("mouseout", function(){
        document.getElementById("table").style.color = "black";
    });

}

function AddRows(){
    console.log("clicked add rows");
    var table = document.getElementById("table");
    for (var i = 0; i < 10; i++){
        console.log("loop number: ", i);
        var row = document.createElement("tr");

        var number = document.createElement("td");
        number.innerHTML = i + 4;
        row.appendChild(number);

        var name = document.createElement("td");
        var names = ['Bob', 'Sally', 'John', 'Jane', 'Billy']
        name.innerHTML = names[Math.floor(Math.random() * names.length)]
        //                     random number from 0 to 1 multiplied by
        //                     number of things in our array
        row.appendChild(name)

        var date = document.createElement("td")
        date.innerHTML = new Date(2021, Math.floor(Math.random() * 11))
        row.appendChild(date)

        table.appendChild(row)
    }
}

function AddJoke(){
    console.log("clicked add joke")
    var table = document.getElementById("joketable")
    for (var i = 0; i < 5; i++){
        console.log("loop number: ", i)
        const request = new Request('https://official-joke-api.appspot.com/random_joke',
        {
            method: 'GET'
        })
        fetch(request).then(response => {
            if (response.status == 200){
                return response.json();
            }
        }).then(response => {
            console.log(response)
            var row = table.insertRow(1)

            var joke = row.insertCell(0)
            joke.innerHTML = response.setup

            var answer = row.insertCell(1)
            answer.innerHTML = response.punchline

            row.addEventListener("click", function(){
                row.style.color = "red";
            });


        })
    }
}