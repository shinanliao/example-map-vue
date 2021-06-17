<template>
  <div class="map">
    <h1>My Favorite Places</h1>
    <div id="map"></div>
  </div>
</template>

<style>
#map {
  width: 100%;
  height: 600px;
}
</style>

<script>
/* global mapboxgl */
export default {
  data: function () {
    return {
      places: [
        { lat: -25.363, lng: 131.044, description: "A place in Australia" },
        { lat: -33.8675, lng: 151.207, description: "The main city!" },
      ],
    };
  },
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-121.967522, 37.777081],
      zoom: 5,
    });

    this.places.forEach((place) => {
      var location = [place.lng, place.lat];
      var placeDescription = place.description;
      var descriptionPopup = new mapboxgl.Popup({ offset: 25 }).setText(placeDescription).addTo(map);
      new mapboxgl.Marker({ color: "black" }).setLngLat(location).setPopup(descriptionPopup).addTo(map);
      console.log(descriptionPopup);
    });

    var popup = new mapboxgl.Popup({ offset: 25 }).setText("Why is it so hot here?");
    console.log(popup);

    var marker1 = new mapboxgl.Marker().setLngLat([-121.967522, 37.777081]).setPopup(popup).addTo(map);
    console.log(marker1);

    var marker2 = new mapboxgl.Marker().setLngLat([-117.1611, 32.7157]).addTo(map);
    console.log(marker2);
  },
  methods: {},
};
</script>
