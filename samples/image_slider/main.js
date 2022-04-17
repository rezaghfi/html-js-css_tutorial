var imageSrc = ["img/apple.jpg", "img/orange.jpg", "img/straberry.png"];
var num = 0;
var image = document.getElementById("image");
prev.onclick = function () {
  num--;
  if (num < 0) {
    num = imageSrc.length - 1;
  }
  image.src = imageSrc[num];
};

next.onclick = function () {
  num++;
  if (num >= imageSrc.length) {
    num = 0;
  }
  image.src = imageSrc[num];
};
