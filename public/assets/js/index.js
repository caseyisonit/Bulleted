$(".sectionForm .addbtn").on("click", function() {
  var todo = $(this).siblings(".todo").val().trim(); // get value of todo field

  // if no todo item is specified, throw alert message and break out
  if (!todo) {
      alert("You must write something!");
      return false;
  }

  var section = $(this).closest(".sectionForm").attr("id"); // get id of "form"
  var routePart = section.substring(0, section.length - 4); // get either 'todays', 'weeks', or 'months' depending
  var body = {
      todo,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  $.ajax({
      method: "POST",
      url: `/api/${routePart}`,
      data: body
  }).then(function(response) {
      location.reload();
  });
});

$(".sectionForm li").on("click", function() {
  var id = $(this).attr("id"); // num to delete
  var status = $(this).hasClass("completed"); // completed: true or false
  var section = $(this).closest(".sectionForm").attr("id"); // get id of "form"
  var routePart = section.substring(0, section.length - 4); // get either 'todays', 'weeks', or 'months' depending


  $.ajax({
      method: "PUT",
      url: `/api/${routePart}/${id}`,
      data: { completed: !status }
  }).then(function(response) {
      location.reload();
  })
});

// To-Do list
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("myUL");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
};
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector(".myUL");
// list.addEventListener("click", function(ev) {
//   if (ev.target.tagName === "LI") {
//     ev.target.classList.toggle("checked");
//   }
// }, false);


// HEY -- I'm still here just in case you need anything from me!
// function newElement1() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput1").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL1").appendChild(li);
//   }
//   document.getElementById("myInput1").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }

function newElement4() {
var li = document.createElement("li");
var inputValue = document.getElementById("textarea1").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === "") {
  alert("You must write something!");
} else {
  document.getElementById("journal-entries").appendChild(li);
}
document.getElementById("textarea1").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
}

// End To-Do List
$(function() {
  $("#loginButton").on("click", function() {
    window.location.replace("http://localhost:8000/login");
    });
  $("#signupButton").on("click", function(){
      window.location.replace("http://localhost:8000/signup");
  });
  $("#startButton").on("click", function(event){
      event.preventDefault();
      window.location.replace("http://localhost:8000/signup");
  });
  $("#goToUserPage").on("click", function(){
      window.location.replace("http://localhost:8000/members");
  });
  });
