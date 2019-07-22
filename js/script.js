var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});

var restartGroup = document.querySelectorAll(".restart");
restartGroup.forEach(button => {
  button.addEventListener("click", function() {
    flkty.select(0);
  });
});

var progressBar = document.querySelector(".progress-bar");

flkty.on("scroll", function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + "%";
});

var show = document.getElementsByClassName("show")[0];
var templateHello = document.getElementById("template-hello").innerHTML;
var templateList = document.getElementById("template-product-list").innerHTML;
Mustache.parse(templateHello);
var generatedHello = "";
for (var i = 0; i < data.length; i++) {
  generatedHello += Mustache.render(templateHello, data[i]);
}

//var list = Mustache.render(templateList, { list: generatedHello });
//var generatedHello = Mustache.render(templateHello, data[1]);
//elem.insertAdjacentHTML("beforeend", generatedHello);
show.insertAdjacentHTML("beforeend", generatedHello);
