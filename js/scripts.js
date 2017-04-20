var slideIndex = 1;
function load() {
  //make sure all the correct buttons are hidden or visible based on which tab is open on load
  var hash = location.hash;

  if (hash == "#Cypher") {
    document.getElementById("error").style.display = "none";
    document.getElementById("send").style.display = "none";
    document.getElementById("lock").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("error1").style.display = "none";
    document.getElementById("error2").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("cpos1").style.display = "none";
    document.getElementById("cpos2").style.display = "none";
    document.getElementById("cpos3").style.display = "none";
    document.getElementById("cpos4").style.display = "none";
    document.getElementById("cpos5").style.display = "none";
    document.getElementById("cpos6").style.display = "none";
    document.getElementById("cpos7").style.display = "none";
    document.getElementById("cpos8").style.display = "none";
    document.getElementById("cpos9").style.display = "none";
    document.getElementById("cpos10").style.display = "none";
    document.getElementById("cpos11").style.display = "none";
    document.getElementById("cpos12").style.display = "none";
    document.getElementById("cpos13").style.display = "none";
    document.getElementById("cpos14").style.display = "none";
    document.getElementById("cpos15").style.display = "none";
    document.getElementById("cpos16").style.display = "none";
    document.getElementById("cpos17").style.display = "none";
    document.getElementById("cpos18").style.display = "none";
    document.getElementById("cpos19").style.display = "none";
    document.getElementById("cpos20").style.display = "none";
    document.getElementById("cpos21").style.display = "none";
    document.getElementById("cpos22").style.display = "none";
    document.getElementById("cpos23").style.display = "none";
    document.getElementById("cpos24").style.display = "none";
    document.getElementById("cpos25").style.display = "none";
    document.getElementById("cpos26").style.display = "none";
    document.getElementById("ckeys").style.display = "none";
    document.getElementById("cbuild").style.display = "none";
    document.getElementById("creset").style.display = "none";
    document.getElementById("csend").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById('cipherTab').click();
  }

  else if (hash == "#CustomCypher") {
    document.getElementById("error").style.display = "none";
    document.getElementById("error1").style.display = "none";
    document.getElementById("error2").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("cpos1").style.display = "none";
    document.getElementById("cpos2").style.display = "none";
    document.getElementById("cpos3").style.display = "none";
    document.getElementById("cpos4").style.display = "none";
    document.getElementById("cpos5").style.display = "none";
    document.getElementById("cpos6").style.display = "none";
    document.getElementById("cpos7").style.display = "none";
    document.getElementById("cpos8").style.display = "none";
    document.getElementById("cpos9").style.display = "none";
    document.getElementById("cpos10").style.display = "none";
    document.getElementById("cpos11").style.display = "none";
    document.getElementById("cpos12").style.display = "none";
    document.getElementById("cpos13").style.display = "none";
    document.getElementById("cpos14").style.display = "none";
    document.getElementById("cpos15").style.display = "none";
    document.getElementById("cpos16").style.display = "none";
    document.getElementById("cpos17").style.display = "none";
    document.getElementById("cpos18").style.display = "none";
    document.getElementById("cpos19").style.display = "none";
    document.getElementById("cpos20").style.display = "none";
    document.getElementById("cpos21").style.display = "none";
    document.getElementById("cpos22").style.display = "none";
    document.getElementById("cpos23").style.display = "none";
    document.getElementById("cpos24").style.display = "none";
    document.getElementById("cpos25").style.display = "none";
    document.getElementById("cpos26").style.display = "none";
    document.getElementById("ckeys").style.display = "none";
    document.getElementById("cbuild").style.display = "none";
    document.getElementById("creset").style.display = "none";
    document.getElementById("csend").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById("send").style.display = "none";
    document.getElementById("lock").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("customCipherTab").click();
  }
  else {
    document.getElementById("error").style.display = "none";
    document.getElementById("error1").style.display = "none";
    document.getElementById("error2").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("cpos1").style.display = "none";
    document.getElementById("cpos2").style.display = "none";
    document.getElementById("cpos3").style.display = "none";
    document.getElementById("cpos4").style.display = "none";
    document.getElementById("cpos5").style.display = "none";
    document.getElementById("cpos6").style.display = "none";
    document.getElementById("cpos7").style.display = "none";
    document.getElementById("cpos8").style.display = "none";
    document.getElementById("cpos9").style.display = "none";
    document.getElementById("cpos10").style.display = "none";
    document.getElementById("cpos11").style.display = "none";
    document.getElementById("cpos12").style.display = "none";
    document.getElementById("cpos13").style.display = "none";
    document.getElementById("cpos14").style.display = "none";
    document.getElementById("cpos15").style.display = "none";
    document.getElementById("cpos16").style.display = "none";
    document.getElementById("cpos17").style.display = "none";
    document.getElementById("cpos18").style.display = "none";
    document.getElementById("cpos19").style.display = "none";
    document.getElementById("cpos20").style.display = "none";
    document.getElementById("cpos21").style.display = "none";
    document.getElementById("cpos22").style.display = "none";
    document.getElementById("cpos23").style.display = "none";
    document.getElementById("cpos24").style.display = "none";
    document.getElementById("cpos25").style.display = "none";
    document.getElementById("cpos26").style.display = "none";
    document.getElementById("ckeys").style.display = "none";
    document.getElementById("cbuild").style.display = "none";
    document.getElementById("creset").style.display = "none";
    document.getElementById("csend").style.display = "none";
    document.getElementById("clock").style.display = "none";
    document.getElementById("send").style.display = "none";
    document.getElementById("lock").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("saveInput").style.display = "none";
    document.getElementById('learnTab').click();

  }
}

function openTab(evt, tabName) {
  //open the that was just selected, this is passed in
  var i, x, y, tablinks;
  x = document.getElementsByClassName("tab");
  y = document.getElementsByClassName("quiz");

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
  showDivs(slideIndex);
}

function openQuiz(evt, quiz) {
  //open quiz when clicked
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
  //send message modal is shown with the correct key and message included
  //console.log(getMessage());
  document.getElementById("sendMess").style.display = "block";
  document.getElementById("sequence").textContent = getKey();
  document.getElementById("message").textContent = getMessage();
}

function customSendMessage() {
  //send message modal is open for custom wheels which inlcudes the right key and message
  //console.log(getMessage());
  document.getElementById("sendMessCustom").style.display = "block";
  document.getElementById("sequence2").textContent = customGetKey();
  document.getElementById("message2").textContent = customGetMessage();
}

function instructions() {
  //open instructions modal

  document.getElementById("custInstruction").style.display = "block";
}

function customGetKey() {
  //get the custom key and clean it for display in modal
  var key = [];
  var sequence = "";
  for (i = 1; i <= 26; i++){
    key.push(document.getElementById('cpos' + i).value);
  }
  //clean
  for (j = 0; j <=25; j++) {
    if (j < 25) {
    sequence = sequence + key[j] + ", ";
    }
    else {
      sequence = sequence + key[j];
    }
  }
  return sequence;
}

function getMessage() {
  //get message to put in send modal
    var message = document.getElementsByClassName("mbsc-sc-itm mbsc-sc-itm-3d   mbsc-btn-e mbsc-sc-itm-sel")[0].textContent;
  return message;
}

function customGetMessage() {
  //get custom message for send modal
    var len = document.getElementsByClassName("mbsc-sc-itm mbsc-sc-itm-3d   mbsc-btn-e mbsc-sc-itm-sel").length;
    if (len > 1)
      var message = document.getElementsByClassName("mbsc-sc-itm mbsc-sc-itm-3d   mbsc-btn-e mbsc-sc-itm-sel")[1].textContent;
    else {
      var message = document.getElementsByClassName("mbsc-sc-itm mbsc-sc-itm-3d   mbsc-btn-e mbsc-sc-itm-sel")[0].textContent;
    }
  return message;
}

function getKey() {
  //get key for display in send modal
  var key = [];
  var sequence = "";
  for (i = 1; i <= 26; i++){
    key.push(document.getElementById('pos' + i).value);
  }
  //clean for display in message
  for (j = 0; j <=25; j++) {
    if (j < 25) {
    sequence = sequence + key[j] + ", ";
    }
    else {
      sequence = sequence + key[j];
    }
  }
  return sequence;
}

function sendEmail() {
  //send email using emailJS filling in the message and key. Using user provided email and friend name.
  var receiver = document.getElementById("to_email").value;
  var encrypted = getMessage();
  var friend = document.getElementById("friend").value;
  var sequence = getKey();
  emailjs.send("default_service","template_UjyJpOF0",{to_email: receiver, from_name: "Jefferson Cypher", name: friend, key: sequence, message: encrypted})
  .then(function(){
       document.getElementById("sendEmail").style.display = 'none';
       document.getElementById("sendFooter1").className = "w3-container w3-green";
       document.getElementById("sendFooter2").className = "lightSpeedIn animated";
       document.getElementById("sendFooter2").textContent = "Email Sent Successfully!";
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
}

function sendEmailCustom() {
  //send custom email using emailJS filling in the message and key. Using user provided email and friend name, and sender name.
  var receiver = document.getElementById("to_email2").value;
  var encrypted = customGetMessage();
  var friend = document.getElementById("friend2").value;
  var sequence = customGetKey();
  var sender = document.getElementById("sender").value;
  emailjs.send("default_service","custom_cypher",{to_email: receiver, from_name: sender, name: friend, key: sequence, message: encrypted})
  .then(function(){
       document.getElementById("sendEmailCustom").style.display = 'none';
       document.getElementById("sendFooterc1").className = "w3-container w3-green";
       document.getElementById("sendFooterc2").className = "lightSpeedIn animated";
       document.getElementById("sendFooterc2").textContent = "Email Sent Successfully!";
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
}

function resetEmail() {
  //resetEmail if we reset cypher
  document.getElementById('sendMess').style.display='none';
  document.getElementById('sendFooter1').className = 'w3-container w3-blue';
  document.getElementById("sendFooter2").textContent = "";
  document.getElementById("sendFooter2").className = "";
  document.getElementById("sendEmail").style.display = 'inline';
  document.getElementById("to_email").value = "";
  document.getElementById("friend").value = "";

  document.getElementById('sendMessCustom').style.display='none';
  document.getElementById('sendFooterc1').className = 'w3-container w3-blue';
  document.getElementById("sendFooterc2").textContent = "";
  document.getElementById("sendFooterc2").className = "";
  document.getElementById("sendEmailCustom").style.display = 'inline';
  document.getElementById("to_email2").value = "";
  document.getElementById("friend2").value = "";
  document.getElementById("sender").value = "";
}

function plusDivs(n) {
  //show divs for the slide on learn tab
  showDivs(slideIndex += n);
}

function showDivs(n) {
  //show divs for the slide on learn tab
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
