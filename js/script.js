// element argument can be a selector string
//   for an individual element

var progressBar = document.querySelector(".progress-bar");

var show = document.getElementsByClassName("show")[0];
var templateHello = document.getElementById("template-hello").innerHTML;
Mustache.parse(templateHello);
var generatedHello = "";
for (var i = 0; i < data.length; i++) {
  generatedHello += Mustache.render(templateHello, data[i]);
}

//var list = Mustache.render(templateList, { list: generatedHello });
//var generatedHello = Mustache.render(templateHello, data[1]);
//elem.insertAdjacentHTML("beforeend", generatedHello);
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
