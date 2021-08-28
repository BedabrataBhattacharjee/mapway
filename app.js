mapboxgl.accessToken = 'pk.eyJ1IjoiYmVkYWJyYXRhMjQiLCJhIjoiY2tzdnIwMjlqMGt2NzJvbGd4aWk2N20yNiJ9.4V_8whiKnHbCDDDkZOXjIw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([94.9120, 27.4728])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiYmVkYWJyYXRhMjQiLCJhIjoiY2tzdnIwMjlqMGt2NzJvbGd4aWk2N20yNiJ9.4V_8whiKnHbCDDDkZOXjIw'

      });
      map.addControl(directions, 'top-left');
}

