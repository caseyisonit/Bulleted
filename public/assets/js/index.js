$(function() {
    $("#loginButton").on("click", function(event) {
      window.location.replace("http://localhost:8000/login")
      })
    $("#signupButton").on("click", function(event){
        window.location.replace("http://localhost:8000/signup")
    })
    $("#startButton").on("click", function(event){
        event.preventDefault()
        window.location.replace("http://localhost:8000/signup")
    })
    $("#goToUserPage").on("click", function(event){
        window.location.replace("http://localhost:8000/members")
    })
    });
