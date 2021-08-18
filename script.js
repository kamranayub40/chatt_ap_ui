// document.getElementById('.chats').scrollIntoView();
// var name 
// window.addEventListener('load',
//   function() {
//   var person = prompt("Enter your username");
//     if (person != null) {
//       document.getElementById("username").innerHTML =
//         "Welcome, " + person + ".";
//         name = person        
//       // If the prompt is empty, anoterh appears //
//       while (person == "" || person == null) {
//         person = prompt("Your username can't be empty!", "");
//         document.getElementById("username").innerHTML =
//           "Welcome, " + person + ".";
//       }
//     }
//   }, false);
$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})
$(document).ready(function() {
    $('.send-btn').click(function() {
      var message = $('#selected-seats').val();
      $('.my-chatinput').append('<p id="username"> says: ' + message + '</p>' + '<br>');
      $('#selected-seats').val('');
    });
  });

    // $('.send-btn').on('click', function() {
    //     var value = $('#selected-seats').val(); 
    //     console.log(value)
    //     $('.my-chatinput').append('<div .my-chatinput ">   says: ' + value + '</div>' + '<br>');
    //     $('#selected-seats').val('');
    //     // Do what you want with the value
    // });


    function updateScroll(){
        if(!scrolled){
            var element = document.getElementById(".chats");
            element.scrollTop = element.scrollHeight;
        }
    }
    
    $(".chats").on('scroll', function(){
        scrolled=true;
    });