function get() {
    const getData = async () => {
        const city = document.getElementById("city").value
        if (city) {
            document.getElementById("cname").style.border="2px solid grey";
            document.getElementById("cname").style.borderRadius="50px";
            document.getElementById("cname").style.width="800px";
            document.getElementById("cname").innerText = `Showing Weather of ${city}`
        }
        const url = `https://goweather.herokuapp.com/weather/${city}`;
        const options = {
            method: 'GET'
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            document.getElementById("desc").value = result.description
            document.getElementById("day1").value = result.forecast[0].day
            document.getElementById("temp1").value = result.forecast[0].temperature
            document.getElementById("wind1").value = result.forecast[0].wind
            
            document.getElementById("day2").value = result.forecast[1].day
            document.getElementById("temp2").value = result.forecast[1].temperature
            document.getElementById("wind2").value = result.forecast[1].wind

            document.getElementById("day3").value = result.forecast[2].day
            document.getElementById("temp3").value = result.forecast[2].temperature
            document.getElementById("wind3").value = result.forecast[2].wind

            document.getElementById("temp").value = result.temperature
            document.getElementById("wind").value = result.wind
            
            
        } catch (error) {
            console.error(error);
        }
    }
    getData()
}