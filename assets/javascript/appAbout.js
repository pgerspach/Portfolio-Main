$(document).ready(() => {
  var config = {
    authDomain: "portfolio-contact-10952.firebaseapp.com",
    databaseURL: "https://portfolio-contact-10952.firebaseio.com",
    projectId: "portfolio-contact-10952",
    storageBucket: "portfolio-contact-10952.appspot.com",
    messagingSenderId: "134741402089"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  showAnimation("welcomeSwipe", "6", "canChangeW");
  function showAnimation(anim, duration, whichClass) {
    $(`.${whichClass}`).attr(
      `style`,
      `animation: ${anim} ${duration}s;animation-fill-mode:forwards;`
    );
  }

  $(".contactSubmit").on("click", (event)=>{
    event.preventDefault();
    let message = $(".form-message").val();
    let email = $(".form-email").val();
    let name = $(".form-inp").val();
    database.ref('messages').push({
      message:message,
      email:email,
      name:name
    });
    $(".form-message").val("");
    $(".form-email").val("");
    $(".form-inp").val("");


  })

});
