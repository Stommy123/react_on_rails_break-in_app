results = Geocoder.search("Paris")
results.first.coordinates
=> [48.856614, 2.3522219]  # latitude and longitude


<html>
<body>

<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo"></p>

<script>
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
</script>

</body>
</html>




// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// const showPosition = (position) => {
//   position1 = position.coords.latitude
//   position2 = position.coords.longitude
// }

// <ul>
//   {this.state.reports.map((reports) => {
//     return(
//       <li key={reports.id}>{reports.description}</li>
//     )
//   })}
// </ul>
