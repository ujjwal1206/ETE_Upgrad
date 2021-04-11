function covidtracker() {
    var country = document.getElementById("t1").value;
    var dateOne = document.getElementById("t2").value;
    var dateTwo = document.getElementById("t3").value;
    //const url = `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`;
    console.log(country);
    console.log(dateOne);
    console.log(dateTwo);
    const url1 = `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`;
    fetch(url1).then((response) => {
            return response.json();
        })
        .then(data => {
            var confirmed = (data[data.length - 1].Confirmed);
            var active = (data[data.length - 1].Active);
            var death = (data[data.length - 1].Deaths);
            console.log(confirmed);
            console.log(active);
            console.log(death);
            document.getElementById("container").innerHTML += "<br><div id=\"content\"><p class=\"para\">Confirmed cases: " + confirmed +
                "</p><p class=\"para\">Active Cases: " + active + "</p><p class=\"para\">Death Cases: " + death + "</p></div>";
        });
}