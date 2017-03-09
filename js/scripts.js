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

function sendMessage() {
  console.log(getMessage());
  document.getElementById("sendMess").style.display = "block";
}

function getMessage() {
    var message = document.getElementsByClassName("mbsc-sc-itm mbsc-sc-itm-3d   mbsc-btn-e mbsc-sc-itm-sel")[0].textContent;
  return message;
}
function getKey() {
  var key = [];
  var sequence = "";
  for (i = 1; i <= 20; i++){
    key.push(document.getElementById('pos' + i).value);
  }

  for (j = 0; j <=19; j++) {
    if (j < 19) {
    sequence = sequence + key[j] + ", ";
    }
    else {
      sequence = sequence + key[j];
    }
  }
  return sequence;
}

function sendEmail() {
  var receiver = document.getElementById("to_email").value;
  var encrypted = getMessage();
  var friend = document.getElementById("friend").value;
  var sequence = getKey();
  emailjs.send("default_service","template_UjyJpOF0",{to_email: receiver, from_name: "Jefferson Cypher", name: friend, key: sequence, message: encrypted})
  .then(function(){
       alert("Sent!");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
}
