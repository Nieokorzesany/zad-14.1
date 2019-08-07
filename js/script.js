// element argument can be a selector string
//   for an individual element
var gMapsArr = [];
var map = null;

var progressBar = document.querySelector(".progress-bar");

var show = document.getElementsByClassName("show")[0];
var templateHello = document.getElementById("template-hello").innerHTML;
Mustache.parse(templateHello);
var generatedHello = "";
for (var i = 0; i < data.length; i++) {
  generatedHello += Mustache.render(templateHello, data[i]);
}

show.insertAdjacentHTML("beforeend", generatedHello);

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  hash: true
});

var restartGroup = document.querySelectorAll(".restart");
restartGroup.forEach(button => {
  button.addEventListener("click", function() {
    flkty.select(0);
  });
});

flkty.on("scroll", function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + "%";
});

flkty.on("change", function(index) {
  if (map) {
    // map.setCenter(
    map.panTo(gMapsArr[index].getPosition());
  }
});

// Initialize and add the map
window.initMap = function() {
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: data[0].coords
  });

  // The marker, positioned at Uluru
  for (var i = 0; i < data.length; i++) {
    var gMap = new google.maps.Marker({ position: data[i].coords, map: map });
    console.log("gMap", gMap);
    gMapsArr.push(gMap);

    // gMap.inArrayIndex = i;

    gMap.addListener(
      "click",
      function(data) {
        flkty.select(this.data);
        console.log("this", this);
        map.panTo(this.gMap.getPosition());
      }.bind({ data: i, gMap: gMap })
    );
  }
};
