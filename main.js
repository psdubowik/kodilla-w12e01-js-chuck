var url = "http://api.icndb.com/jokes/random";
getJoke();
var button = document.getElementById("get-joke");
button.addEventListener("click", function(){
    getJoke();
});

var paragraph = document.getElementById("joke");

function getJoke(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", function(){
        var response = JSON.parse(xhr.response);

        if ("value" in response && "joke" in response.value && response.value.joke != null) {
            paragraph.innerHTML = response.value.joke;
        } else {
            getJoke()
        };
    });
    xhr.send();
}
