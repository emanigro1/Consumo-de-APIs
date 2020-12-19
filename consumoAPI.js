const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const xml = new XMLHttpRequest();

    xml.addEventListener("load", function () {

        if (this.status == 200) {

            let data = JSON.parse(this.responseText);

            document.getElementById("containerDate").textContent = data.date;
            document.getElementById("containerTitle").textContent = data.title;
            document.getElementById("containerExplanation").textContent = data.explanation;
            document.getElementById("containerMediaType").hidden = false;
            document.getElementById("containerMediaType").src = data.url;
            btn.hidden = true;
            document.getElementById("containerAll").hidden = false;

        } else {
            document.getElementById("errorModal").textContent = "Error en llamada a la API, codigo " + this.status;

        }

    })

    xml.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    xml.send();

});