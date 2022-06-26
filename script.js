let btn = document.getElementsByClassName("question");

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      this.style.fontWeight = "400";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      this.style.fontWeight = "900";
    }
    let symb = this.children[1];
    if (symb.style.transform != "rotate(180deg)") {
      symb.style.transform = "rotate(180deg)";
    } else {
      symb.style.transform = "rotate(0deg)";
    }
  });
}
