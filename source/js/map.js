if (typeof ymaps !== "undefined") ymaps.ready(init);

function init() {

  var myMap;

  myMap = new ymaps.Map("map", {
    center: [59.9387942, 30.3230833],
    zoom: 17,
    controls: [],

  });

  myMap.behaviors.disable("scrollZoom");

  myMap.controls.add("zoomControl", {
    position: { top: 15, left: 15 }
  });
  var myPlacemark = new ymaps.Placemark([59.9387942, 30.3230833], {},
    {
      iconLayout: "default#image",
      iconImageHref: "/img/icon-map-pin.svg",
      iconImageSize: [66, 102],
      iconImageOffset: [-40, -87]
    });

  myMap.geoObjects.add(myPlacemark);
}
