function submitEmail() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const name =
    document.getElementById(
      "name-email"
    ).value; /*lấy địa chỉ email vừa mới nhập*/
  const error = document.getElementById("error-email");
  const check = regex.test(name); /*kiểm tra email nhập đúng định dạng không  */
  const info = document.querySelector(".info-group");
  const submit = document.querySelector(".submit-email");
  if (check) {
    info.style.display = "block";
    submit.style.display = "none";
  } else {
    error.innerHTML = "Vui lòng nhập đúng định dạng email";
    error.style.color = "red";
  }
}
/*--kinh nghiệm-------*/
function callHoverEvent() {
  var form = document.getElementById("morelessleButton");
  form.style.display = "block";
}
function callMouseOutEvent() {
  var form = document.getElementById("morelessleButton");

  form.style.display = "none";
}
/*-------học vấn----------*/
function callHoverEventHV() {
  var form = document.getElementById("hocvanButton");
  form.style.display = "block";
}
function callMouseOutEventHV() {
  var form = document.getElementById("hocvanButton");

  form.style.display = "none";
}
/*hoạt động-------------*/
function callHoverEventHD() {
  var form = document.getElementById("hoatdongButton");
  form.style.display = "block";
}
function callMouseOutEventHD() {
  var form = document.getElementById("hoatdongButton");

  form.style.display = "none";
}
/*--------Sở thích-----------*/
function callHoverEventST() {
  var form = document.getElementById("sothichButton");
  form.style.display = "block";
}
function callMouseOutEventST() {
  var form = document.getElementById("sothichButton");

  form.style.display = "none";
}
/*------ngôn ngữ-------------------*/
function callHoverEventNN() {
  var form = document.getElementById("ngonnguButton");
  form.style.display = "block";
}
function callMouseOutEventNN() {
  var form = document.getElementById("ngonnguButton");

  form.style.display = "none";
}
/*----------kỹ năng-----------------*/
function callHoverEventKyN() {
  var form = document.getElementById("kynangButton");
  form.style.display = "block";
}
function callMouseOutEventKyN() {
  var form = document.getElementById("kynangButton");

  form.style.display = "none";
}
