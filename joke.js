let jokec = document.getElementById("joke");
let btn = document.getElementById("btn");

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getjoke = () => {
    jokec.classList.remove("fade");

    fetch(url)
        .then(response => response.json())
        .then(data => {
           
            if (data.type === "single") {
                jokec.textContent = data.joke;
            } else {
                jokec.textContent = `${data.setup} 🤔\n${data.delivery}`;
            }

            jokec.classList.add("fade");
        })
        .catch(error => {
            jokec.textContent = "Oops! Couldn't fetch a joke. 😢";
            console.error("Error fetching joke:", error);
            jokec.classList.add("fade");
        });
};

btn.addEventListener("click", getjoke);


getjoke();
