function openTab(evt, tabName) {
var i, x, y, tablinks;
x = document.getElementsByClassName("tab");
y = document.getElementsByClassName("quiz");
document.getElementById("error").style.display = "none";
document.getElementById("send").style.display = "none";

for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selectedtab", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " selectedtab";
}

function openQuiz(evt, quiz) {
  var i;
  x = document.getElementsByClassName("quiz");
  y = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
  }
  document.getElementById(quiz).style.display = "block";
}

function sendMessage(evt, sendMess) {
  var i;
  x = document.getElementsByClassName("sendMess");
  y = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
  }
  document.getElementById(sendMess).style.display = "block";
}

function getMessage() {
  var i
  for (i = 0; i < 20; i++){
    var letter = document.getElementsByClassName("mbsc-sc-itm mbsc-sc-itm-3d   mbsc-btn-e mbsc-sc-itm-sel")[i].getAttribute("data-val");
    console.log(letter);
  }
}
