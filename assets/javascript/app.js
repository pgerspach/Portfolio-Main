$(document).ready(function() {
  // $(".portSidebar").attr(`style`,`padding: ${document.getElementById('pSB').offsetWidth-document.getElementById('pSB').clientWidth}`);
  let howmuchScroll = 0;

  // console.log(document.getElementById('pSB').offsetWidth);
  var timeOut;
  let sideBars = {
    projectNames: [
      "Welcome to Pat's Portfolio Page.",
      "Hangman Game",
      "Lord of the Rings RPG",
      "Trivia Game",
      "Project 4",
      "Project 5"
    ],
    descriptions: [
      "<p class = 'par par1'>Here you will find the project name and decription of my projects.</p><p class = 'par par2'>Many projects were assigned through the Columbia Engineering Coding Boot Camp, while a few were completed for my own enjoyment and personal use.</p><p class = 'par par3'>Happy browsing!</p>",
      "<p class = 'par par1'>The site shown here is a completed version of the first 'real' assignment of the Columbia Boot Camp. The idea was to build a page for playing the popular 'hangman' game, and to make it work (duh). </p><p class = 'par par2'>I had a little fun with the design on this assignemnt, and gave it a colorful background and quirky farm theme. For functionality, I relied on jQuery keyboard events for user input, and built functions to handle user input and carry out the appropriate response. The game is initialized with a setup function called on document ready, which grabs a random first word from an array, shows the blanks, and waits for the user. </p><p class = 'par par3'>This game can be found at </p>",
      " <p class = 'par par1'>This was a class assignment titled 'RPG Game'. The premise was to create a game which contains characters with HP and attack power, and have the user choose one with which to defeat the remaining enemies. </p><p class = 'par par2'> I selected Lord of the Rings as my theme, and incorporated newly gained knowledge of objects and classes into my javascript. The game is mostly structured within an object, which contains an array of character objects and methods for handling the character properties. The rest of the js file is primarily jQuery event listeners determining the next action.  </p><p class = 'par '>I believe I was on the right path with this assignment, aiming for clean, sophisticated code while experimenting with new concepts.</p><p class = 'par par3'>The link of this game can be found here: </p>",
      "<p class = 'par par1'>This site was completed for a class assignment which required students to construct a simple trivia game. The game contains 15 questions, which are provided in a random order, one after the next as the user answers questions. Users are notified if they're correct immediately, and are given the total game stats at the game's end. </p><p class = 'par par2'> I went for a more visually appealing style for this UI, allowing a simple transparent 'game box' to rest over a lovely image of Sydney Harbor at night. The game itself is structured with objects and methods, and utilizes time intervals to manage the clock. </p><p class = 'par par3'>The link of this game can be found here: </p>",
      "Description 4",
      "Description 5"
    ]
  };
  $(".sbButton").on("click", event => {
    if ($(".portSidebar").attr("value") == "true") {
      $(".portSidebar").attr("value", "false");
      $(".portSidebar").attr(
        `style`,
        `padding: ${document.getElementById("pSB").offsetWidth -
          document.getElementById("pSB").clientWidth}`
      );

      $(".portSidebar").attr(
        "style",
        "animation:sidebarSwipeLeft .3s;animation-fill-mode: forwards;"
      );

      $(".portContent").attr(
        "style",
        "animation:portSwipeLeft .3s;animation-fill-mode:forwards;"
      );
      $(".header").attr(
        "style",
        "animation:headSwipeLeft .3s;animation-fill-mode:forwards;"
      );

      $(".sbButton").html(">>");
      $(".sbButton").attr("style", "left: 20px;");

      // $(".header").addClass("fullscreen");
    } else {
      $(".portSidebar").attr("value", "true");
      $(".portSidebar").attr(
        `style`,
        `padding: ${document.getElementById("pSB").offsetWidth -
          document.getElementById("pSB").clientWidth}`
      );

      $(".portSidebar").attr(
        "style",
        "animation:sidebarSwipeRight .3s;animation-fill-mode: forwards;"
      );

      $(".portContent").attr(
        "style",
        "animation:portSwipeRight .3s;animation-fill-mode:forwards;"
      );
      $(".header").attr(
        "style",
        "animation:headSwipeRight .3s;animation-fill-mode:forwards;"
      );

      $(".sbButton").html("<<");
      $(".sbButton").attr("style", "left: 27vw;");

      // $(".header").addClass("fullscreen");
    }
  });
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    console.log("Element top: " + elementTop);

    var elementBottom = elementTop + $(this).outerHeight();
    console.log("Element bottom: " + elementBottom);

    var viewportTop = $(this).scrollTop();
    console.log("VP top: " + viewportTop);

    var viewportBottom = viewportTop + $(this).height();
    console.log("VP bottom: " + viewportBottom);

    return (
      elementTop > 0 &&
      elementBottom > viewportTop &&
      elementTop < viewportBottom
    );
  };

  $(".portContent").on("scroll", event => {
    console.log(`${event}`);
    let numProj = sideBars.descriptions.length;
    clearTimeout(timeOut);
    var whichProj = 0;

    timeOut = setTimeout(() => {
      console.clear();
      //   console.log($("header:visible").attr("value"));
      for (let i = 0; i < numProj; i++) {
        if ($(`.portContent${i}`).isInViewport()) {
          whichProj = i;
          break;
        }
      }
      console.clear();
      console.log(whichProj);

      $(".projectName").html(sideBars.projectNames[whichProj]);
      $(".description").html(sideBars.descriptions[whichProj]);
    }, 10);
  });
  function showAnimation(anim, duration,whichClass){
    $(`.${whichClass}`).attr(`style`, `animation: ${anim} ${duration}s;animation-fill-mode:forwards;`);
  }

  // $(".belowHead.about").on("scroll", () => {

  //   clearTimeout(timeOut);

  //   console.log(howmuchScroll);
  //   howmuchScroll++;
  //   aboutScrollAnimation(howmuchScroll);

  //   timeOut = setTimeout(() => {
  //     howmuchScroll = 0;
  //     $(".belowHead.about").scrollTop(0);
  //   }, 250);
  // });

  // function aboutScrollAnimation(howmuchScroll){
  //   if (howmuchScroll > 40) {
  //     $(".belowHead.about").scrollTop(100);

  //     $('.bioDiv.bioDiv2').remove();

  //     $(".canChangeW").attr(
  //       "style",
  //       "animation:welcomeSwipe 1s;animation-fill-mode:forwards;"
  //     );
  //     $(".canChangeBot").attr(
  //       "style",
  //       "animation:hideBottom 1s;animation-fill-mode:forwards;"
  //     );
  //     $(".canChangeB").attr(
  //       "style",
  //       "animation:bioSwipe 1s;animation-fill-mode: forwards;"
  //     );

      
  //     timeOut=setTimeout(()=>{
        // $(".canChangeW").attr(
        //   "style",
        //   "animation:welcomePic 1s;animation-fill-mode:forwards;"
        // );
  //       $(".welcomeAbout").removeClass('canChangeW');
  //       $(".bioDiv.bioDiv2").removeClass('canChangeBot');

  //       $(".bioDiv").removeClass('canChangeB');

  //       clearTimeout(timeOut);
  //     },904);
  //   }
  // }

  $('.bioDiv').mouseenter((event)=>{
    showAnimation('welcomeSwipe', '1', 'canChangeW');
    $('.bioDiv').attr('style','overflow-y:scroll;');

  })
$('.bioDiv').mouseleave((event)=>{
      showAnimation('welcomeSwipeB', '1', 'canChangeW');
  $('.bioDiv').scrollTop(0);

})



});
