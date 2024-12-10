// boxs popup
const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
  const innerBox = box.querySelector(".inner-box");
  const content = box.querySelector(".inner-box .content");
  const close = innerBox.querySelector(".close");

  box.onclick = () => {
    innerBox.classList.add("show");
  };

  close.onclick = (event) => {
    innerBox.classList.remove("show");
    event.stopPropagation();
  };

  innerBox.onclick = (event) => {
    if (!content.contains(event.target)) {
      innerBox.classList.remove("show");
      event.stopPropagation();
    };
  }

});
