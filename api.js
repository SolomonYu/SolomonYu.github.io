

function generateJoke(){
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
        document.getElementById('jokeDisplay').innerHTML = response.setup
        document.getElementById('jokeAnswer').innerHTML = response.punchline
    })
}

